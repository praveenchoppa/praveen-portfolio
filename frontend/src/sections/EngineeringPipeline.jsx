import { useState } from "react";
import { Code2, Cuboid, RefreshCw, ScanSearch, ShieldCheck } from "lucide-react";
import { pipeline } from "../data/portfolioData";

const icons = {
  understand: ScanSearch,
  architect: Cuboid,
  build: Code2,
  verify: ShieldCheck,
  evolve: RefreshCw,
};

export default function EngineeringPipeline() {
  const [active, setActive] = useState(null);

  return (
    <section id="pipeline" className="shell scroll-mt-28 py-14 md:py-16">
      <div data-cosmic-exclude="true">
      <p className="sys-label">// ENGINEERING PIPELINE</p>
      <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">
        How I Build
        <br />
        Systems
      </h2>
      <p className="mt-4 max-w-2xl text-[var(--text-2)]">
        A working loop drawn from internship and project work: understand the requirement, decide the structure, implement the service, verify it, then evolve it.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {pipeline.map((stage, index) => {
          const Icon = icons[stage.id];
          const isEvolve = stage.id === "evolve";
          const isActive = active === stage.id;
          return (
            <article
              key={stage.id}
              onMouseEnter={() => setActive(stage.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(stage.id)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              className={`hover-lift panel relative rounded-2xl p-4 outline-none ${
                isActive
                  ? isEvolve
                    ? "edge-orange border-[rgba(249,115,22,0.4)]"
                    : "edge-blue border-[rgba(41,151,255,0.4)]"
                  : ""
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-xl border border-[var(--line)] ${
                    isEvolve ? "text-[var(--orange)]" : "text-[var(--blue-2)]"
                  }`}
                >
                  <Icon size={17} />
                </span>
                <span className={`font-mono text-xs ${isEvolve ? "text-[var(--orange)]" : "text-[var(--text-3)]"}`}>
                  {stage.number}
                </span>
              </div>
              <h3 className="text-lg font-medium">{stage.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">{stage.description}</p>
              {index < pipeline.length - 1 && (
                <div
                  className={`pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-[var(--blue-2)]/40 md:block ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                />
              )}
            </article>
          );
        })}
      </div>
      </div>
    </section>
  );
}
