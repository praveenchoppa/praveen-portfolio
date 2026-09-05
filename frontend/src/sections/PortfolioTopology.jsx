import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ExploreTopologyModal from "../components/ExploreTopologyModal";
import TopologyGraph, { nodeCopy } from "../components/TopologyGraph";

export default function PortfolioTopology() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("praveen");
  const details = nodeCopy(selectedId);

  return (
    <section id="topology" className="shell scroll-mt-28 py-14 md:py-16">
      <div data-cosmic-exclude="true">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="sys-label">// THINK IN SYSTEMS</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Portfolio Topology</h2>
          <p className="mt-4 max-w-2xl text-[var(--text-2)]">
            An interactive view of how my engineering experience, projects, technology stack, and career direction connect as one system — not a tutorial in distributed infrastructure.
          </p>
        </div>
        <button type="button" onClick={() => setOpen(true)} className="btn btn-primary">
          Explore Topology
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.7fr]">
        <div className="panel edge-blue overflow-hidden rounded-[24px] p-3 md:p-5">
          <TopologyGraph selectedId={selectedId} onSelect={(id) => setSelectedId(id)} />
        </div>
        <aside className="panel rounded-[24px] p-5">
          <p className="sys-label">Selected node</p>
          <h3 className="mt-3 text-xl font-medium">{details.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--text-2)]">{details.body}</p>
          <p className="mt-5 font-mono text-xs leading-5 text-[var(--text-3)]">{details.meta}</p>
        </aside>
      </div>

      </div>
      <ExploreTopologyModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
