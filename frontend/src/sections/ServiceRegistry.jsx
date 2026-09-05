import { useEffect, useState } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import { projects } from "../data/portfolioData";

const accents = {
  green: "hover:border-[rgba(34,197,94,0.45)]",
  blue: "hover:border-[rgba(41,151,255,0.45)]",
  orange: "hover:border-[rgba(249,115,22,0.45)]",
};

export default function ServiceRegistry() {
  const [active, setActive] = useState(null);
  const selected = projects.find((project) => project.id === active);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="projects" className="shell scroll-mt-28 py-14 md:py-16">
      <div data-cosmic-exclude="true">
      <p className="sys-label">// ENGINEERING PROJECTS</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Selected Backend Services</h2>
      <p className="mt-4 max-w-2xl text-[var(--text-2)]">
        Projects represented as service modules — each one a backend system with a defined purpose, architecture, and verified contribution.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className={`panel hover-lift rounded-[22px] p-5 ${accents[project.accent]}`}>
            <div className="mb-5 flex items-start justify-between gap-3">
              <p className="sys-label text-[var(--blue-2)]">{project.serviceId}</p>
              <span className="font-mono text-xs text-[var(--text-3)]">{project.shortName.toUpperCase()}</span>
            </div>
            <h3 className="text-xl font-medium leading-snug">{project.name}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--text-2)]">{project.purpose}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="chip rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2">
              <button type="button" onClick={() => setActive(project.id)} className="btn btn-secondary !min-h-10 text-sm">
                View Details
                <ArrowUpRight size={15} />
              </button>
              {project.github && project.github !== "REPLACE_ME" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--line)]"
                  aria-label={`${project.shortName} GitHub repository`}
                >
                  <Github size={16} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/55 p-3 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <div className="panel max-h-[88vh] w-full max-w-2xl overflow-auto rounded-3xl p-6" data-cosmic-exclude="true" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="sys-label">{selected.serviceId}</p>
                <h3 className="mt-2 text-2xl font-semibold">{selected.name}</h3>
              </div>
              <button type="button" onClick={() => setActive(null)} className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--line)]" aria-label="Close project details">
                <X size={16} />
              </button>
            </div>
            <p className="mt-4 text-[var(--text-2)]">{selected.purpose}</p>
            <p className="sys-label mt-6">Architecture & contributions</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--text-2)]">
              {selected.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {selected.technologies.map((tech) => (
                <span key={tech} className="chip rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            {selected.github && selected.github !== "REPLACE_ME" && (
              <a href={selected.github} target="_blank" rel="noreferrer" className="btn btn-primary mt-6">
                <Github size={16} />
                View repository
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
