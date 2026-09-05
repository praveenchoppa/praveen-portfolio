import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import TopologyGraph, { nodeCopy } from "./TopologyGraph";

export default function ExploreTopologyModal({ open, onClose }) {
  const [selectedId, setSelectedId] = useState("praveen");
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef(null);
  const details = nodeCopy(selectedId);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-3 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="topology-explorer-title" onClick={onClose}>
      <div className="panel flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl" data-cosmic-exclude="true" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
          <div>
            <p className="sys-label">SYSTEM GRAPH // LIVE TOPOLOGY</p>
            <h2 id="topology-explorer-title" className="mt-1 text-xl font-semibold">
              Explore Topology
            </h2>
          </div>
          <button type="button" onClick={onClose} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--line)]" aria-label="Close topology explorer">
            <X size={16} />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 lg:grid-cols-[1.4fr_0.8fr]">
          <div
            className="relative overflow-hidden bg-[var(--bg-elev)]"
            onPointerDown={(event) => {
              drag.current = { x: event.clientX - offset.x, y: event.clientY - offset.y };
            }}
            onPointerMove={(event) => {
              if (!drag.current) return;
              setOffset({ x: event.clientX - drag.current.x, y: event.clientY - drag.current.y });
            }}
            onPointerUp={() => {
              drag.current = null;
            }}
            onWheel={(event) => {
              event.preventDefault();
              setScale((value) => Math.min(1.6, Math.max(0.75, value + (event.deltaY > 0 ? -0.08 : 0.08))));
            }}
          >
            <div className="absolute left-4 top-4 z-10 flex gap-2">
              <button type="button" className="focus-ring rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-sm" onClick={() => setScale((value) => Math.min(1.6, value + 0.1))}>+</button>
              <button type="button" className="focus-ring rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-1 text-sm" onClick={() => setScale((value) => Math.max(0.75, value - 0.1))}>−</button>
            </div>
            <div style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`, transformOrigin: "center" }} className="p-4">
              <TopologyGraph selectedId={selectedId} onSelect={(id) => setSelectedId(id)} />
            </div>
          </div>

          <aside className="border-t border-[var(--line)] p-5 lg:border-l lg:border-t-0">
            <p className="sys-label">Selected node</p>
            <h3 className="mt-2 text-lg font-medium">{details.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-2)]">{details.body}</p>
            <p className="mt-4 font-mono text-xs text-[var(--text-3)]">{details.meta}</p>
            <div className="mt-6 space-y-2">
              <p className="sys-label">Legend</p>
              <p className="text-sm text-[var(--text-2)]">Blue — identity, projects, stack</p>
              <p className="text-sm text-[var(--text-2)]">Orange — experience and future direction</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
