import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useTheme } from "../context/ThemeContext";

const NODE_COUNT = 32;
const INFLUENCE_RADIUS = 168;
const PUSH = 16;
const FADE = 0.1;

function createNodes(width, height) {
  return Array.from({ length: NODE_COUNT }, (_, index) => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.55,
    vy: (Math.random() - 0.5) * 0.55,
    r: index % 7 === 0 ? 2.1 : 1.15,
    accent: index % 5 === 0 ? "orange" : "blue",
    ox: 0,
    oy: 0,
  }));
}

function collectExcludeRects() {
  return Array.from(document.querySelectorAll("[data-cosmic-exclude]")).map((node) => {
    const box = node.getBoundingClientRect();
    return {
      x: box.left,
      y: box.top,
      w: box.width,
      h: box.height,
    };
  });
}

function pointInRects(x, y, rects) {
  return rects.some((box) => x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h);
}

function cursorOverExcludedUi(x, y) {
  const hit = document.elementFromPoint(x, y);
  return Boolean(hit?.closest("[data-cosmic-exclude]"));
}

export default function CosmicBackground() {
  const canvasRef = useRef(null);
  const reduced = usePrefersReducedMotion();
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d", { alpha: true });

    let nodes = [];
    let raf = 0;
    let excludeRects = [];
    let lastRectSync = 0;
    const mouse = { x: -9999, y: -9999, target: 0, influence: 0, wave: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = createNodes(window.innerWidth, window.innerHeight);
      excludeRects = collectExcludeRects();
    };

    const syncRects = () => {
      excludeRects = collectExcludeRects();
    };

    const onPointerMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (reduced) {
        mouse.target = 0;
        return;
      }
      mouse.target = cursorOverExcludedUi(event.clientX, event.clientY) ? 0 : 1;
    };

    const onPointerLeave = () => {
      mouse.target = 0;
    };

    const clipEmptySpace = (width, height) => {
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      excludeRects.forEach((box) => {
        ctx.rect(box.x, box.y, box.w, box.h);
      });
      ctx.clip("evenodd");
    };

    const draw = (time) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (time - lastRectSync > 180) {
        syncRects();
        lastRectSync = time;
      }

      mouse.influence += (mouse.target - mouse.influence) * FADE;
      if (mouse.influence < 0.002) mouse.influence = 0;
      if (mouse.target > 0.5) mouse.wave += 1.6;
      else mouse.wave += 0.55;

      ctx.clearRect(0, 0, width, height);

      const isLight = theme === "light";
      const line = isLight ? "rgba(13, 109, 230, 0.08)" : "rgba(41, 151, 255, 0.10)";
      const lineHot = isLight ? "rgba(13, 109, 230, 0.22)" : "rgba(56, 160, 255, 0.32)";
      const blue = isLight ? "rgba(13, 109, 230, 0.55)" : "rgba(56, 160, 255, 0.7)";
      const orange = isLight ? "rgba(249, 115, 22, 0.7)" : "rgba(255, 184, 107, 0.88)";

      const positions = nodes.map((node) => {
        if (!reduced) {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        const occluded = pointInRects(node.x, node.y, excludeRects);
        let tx = 0;
        let ty = 0;
        if (!occluded && mouse.influence > 0) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < INFLUENCE_RADIUS) {
            const falloff = (1 - dist / INFLUENCE_RADIUS) ** 2;
            const force = falloff * PUSH * mouse.influence;
            tx = (dx / dist) * force;
            ty = (dy / dist) * force;
          }
        }
        node.ox += (tx - node.ox) * 0.14;
        node.oy += (ty - node.oy) * 0.14;
        return { x: node.x + node.ox, y: node.y + node.oy, node };
      });

      for (let i = 0; i < positions.length; i += 1) {
        const a = positions[i];
        for (let j = i + 1; j < positions.length; j += 1) {
          const b = positions[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist >= 150) continue;
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const mouseDist = Math.hypot(midX - mouse.x, midY - mouse.y);
          const nearCursor =
            mouse.influence > 0.05 &&
            mouseDist < INFLUENCE_RADIUS &&
            !pointInRects(midX, midY, excludeRects);
          ctx.strokeStyle = nearCursor ? lineHot : line;
          ctx.globalAlpha = (1 - dist / 150) * (nearCursor ? 0.95 : 0.85);
          ctx.lineWidth = nearCursor ? 1 : 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      positions.forEach(({ x, y, node }) => {
        const occluded = pointInRects(x, y, excludeRects);
        const mouseDist = Math.hypot(x - mouse.x, y - mouse.y);
        const nearCursor = !occluded && mouse.influence > 0.05 && mouseDist < INFLUENCE_RADIUS;
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = node.accent === "orange" ? orange : blue;
        ctx.beginPath();
        ctx.arc(x, y, nearCursor ? node.r + 0.7 * mouse.influence : node.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (mouse.influence > 0.02) {
        ctx.save();
        clipEmptySpace(width, height);
        for (let ring = 0; ring < 2; ring += 1) {
          const radius = ((mouse.wave * 0.55 + ring * 42) % 130) + 12;
          ctx.strokeStyle = ring === 1 ? orange : blue;
          ctx.globalAlpha = (1 - radius / 150) * 0.22 * mouse.influence;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      raf = window.requestAnimationFrame(draw);
    };

    resize();
    raf = window.requestAnimationFrame(draw);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", syncRects, { passive: true });

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", syncRects);
    };
  }, [reduced, theme]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            theme === "light"
              ? "radial-gradient(ellipse 70% 50% at 12% 8%, rgba(13,109,230,0.08), transparent 55%), radial-gradient(ellipse 90% 78% at 72% 100%, rgba(249,115,22,0.18), transparent 62%), radial-gradient(ellipse 55% 48% at 90% 86%, rgba(255,138,61,0.14), transparent 52%), var(--bg)"
              : "radial-gradient(ellipse 70% 50% at 10% 6%, rgba(22,131,255,0.16), transparent 52%), radial-gradient(ellipse 95% 82% at 70% 108%, rgba(255,138,61,0.34), transparent 60%), radial-gradient(ellipse 58% 52% at 88% 84%, rgba(249,115,22,0.26), transparent 54%), var(--bg)",
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />
    </div>
  );
}
