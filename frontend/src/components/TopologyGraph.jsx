import { useEffect, useState } from "react";
import { experience, futureDirection, identity, projects, stackLayers, topologyNodes } from "../data/portfolioData";

const DESKTOP_LAYOUT = {
  praveen: { x: 430, y: 188 },
  lumenor: { x: 150, y: 72 },
  greenleaf: { x: 720, y: 70 },
  nexcart: { x: 760, y: 196 },
  roadwatch: { x: 700, y: 318 },
  stack: { x: 160, y: 318 },
  distributed: { x: 430, y: 336 },
};

const MOBILE_LAYOUT = {
  praveen: { x: 160, y: 46 },
  lumenor: { x: 160, y: 128 },
  greenleaf: { x: 160, y: 210 },
  nexcart: { x: 160, y: 292 },
  roadwatch: { x: 160, y: 374 },
  stack: { x: 160, y: 456 },
  distributed: { x: 160, y: 538 },
};

function curve(from, to) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const lift = (to.x - from.x) * 0.12;
  return `M ${from.x} ${from.y} Q ${mx} ${my - 28 - lift} ${to.x} ${to.y}`;
}

function nodeCopy(id) {
  if (id === "praveen") {
    return {
      title: identity.fullName,
      body: identity.summary,
      meta: identity.primaryStack,
    };
  }
  if (id === "lumenor") {
    return {
      title: `${experience.role} · ${experience.company}`,
      body: experience.scope,
      meta: experience.dates,
    };
  }
  if (id === "stack") {
    return {
      title: "Core Technologies",
      body: stackLayers.flatMap((layer) => layer.items).slice(0, 10).join(" · "),
      meta: "Languages, backend, persistence, principles",
    };
  }
  if (id === "distributed") {
    return {
      title: futureDirection.title,
      body: futureDirection.summary,
      meta: futureDirection.status,
    };
  }
  const project = projects.find((item) => item.id === id);
  if (!project) return { title: "", body: "", meta: "" };
  return {
    title: project.name,
    body: project.purpose,
    meta: project.technologies.join(" · "),
  };
}

export default function TopologyGraph({
  compact = false,
  selectedId,
  onSelect,
  className = "",
}) {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const layout = compact || isMobile ? MOBILE_LAYOUT : DESKTOP_LAYOUT;
  const viewBox = compact || isMobile ? "0 0 320 590" : "0 0 860 400";
  const activeId = hovered || selectedId;
  const connected = new Set(
    topologyNodes.find((node) => node.id === activeId)?.connects ?? [],
  );
  if (activeId) connected.add(activeId);

  const edges = [];
  topologyNodes.forEach((node) => {
    node.connects.forEach((targetId) => {
      const key = [node.id, targetId].sort().join("-");
      if (!edges.some((edge) => edge.key === key)) {
        edges.push({ key, from: node.id, to: targetId });
      }
    });
  });

  return (
    <svg
      viewBox={viewBox}
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Interactive portfolio topology graph"
    >
      {edges.map((edge) => {
        const lit =
          !activeId ||
          (connected.has(edge.from) && connected.has(edge.to) && (edge.from === activeId || edge.to === activeId));
        const future = edge.from === "distributed" || edge.to === "distributed";
        return (
          <path
            key={edge.key}
            d={curve(layout[edge.from], layout[edge.to])}
            fill="none"
            stroke={future ? "var(--orange)" : "var(--blue-2)"}
            strokeWidth={lit ? 1.6 : 1}
            strokeOpacity={lit ? 0.85 : 0.18}
            strokeDasharray="5 7"
            className={lit ? "[animation:data-flow_1.4s_linear_infinite]" : ""}
          />
        );
      })}

      {topologyNodes.map((node) => {
        const point = layout[node.id];
        const dimmed = activeId && !connected.has(node.id);
        const featured = node.kind === "experience" || node.kind === "future";
        const copy = nodeCopy(node.id);
        const width = node.id === "praveen" || node.id === "distributed" ? 168 : 146;
        const height = node.id === "praveen" ? 58 : 50;
        return (
          <g
            key={node.id}
            transform={`translate(${point.x - width / 2} ${point.y - height / 2})`}
            opacity={dimmed ? 0.28 : 1}
            className="cursor-pointer"
            onMouseEnter={() => setHovered(node.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect?.(node.id, copy)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect?.(node.id, copy);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${node.label}. ${node.sublabel}`}
          >
            <rect
              width={width}
              height={height}
              rx="10"
              fill="var(--card-solid)"
              stroke={featured ? "var(--orange)" : "var(--blue-2)"}
              strokeWidth={selectedId === node.id || hovered === node.id ? 1.8 : 1}
            />
            <text
              x={width / 2}
              y={22}
              textAnchor="middle"
              fill="var(--text)"
              style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: 11, letterSpacing: "0.04em" }}
            >
              {node.label}
            </text>
            <text
              x={width / 2}
              y={38}
              textAnchor="middle"
              fill="var(--text-3)"
              style={{ fontFamily: "Outfit, sans-serif", fontSize: 10 }}
            >
              {node.sublabel}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export { nodeCopy };
