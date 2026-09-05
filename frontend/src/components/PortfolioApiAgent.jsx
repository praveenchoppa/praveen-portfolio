import { useMemo, useState } from "react";
import { X } from "lucide-react";
import {
  assistantQuestions,
  contact,
  experience,
  identity,
  links,
  projects,
  stackLayers,
  futureDirection,
} from "../data/portfolioData";

function answers() {
  return {
    build: `${identity.fullName} is a backend-focused Computer Science student. He builds secure, database-driven applications with Java, Spring Boot, and REST APIs — taking features from requirements and architecture through implementation, testing, and product integration.`,
    internship: `${experience.role} at ${experience.company} (${experience.mode}), ${experience.dates}. He designed and developed ${experience.product}, a 3D rooftop solar design studio, with end-to-end ownership of feature development for core solar design workflows. The work is scoped to that module and its integration with the broader product — not the entire company platform.`,
    projects: projects
      .map((project) => `${project.serviceId} ${project.name}: ${project.purpose}`)
      .join(" "),
    stack: `Verified technologies: ${stackLayers.flatMap((layer) => layer.items).join(", ")}.`,
    direction: futureDirection.summary,
    contact: `Email ${contact.email}. Phone ${contact.phone}. GitHub ${links.github}. LinkedIn ${links.linkedin}. LeetCode ${links.leetcode}.`,
    resume: `The resume PDF is available at ${contact.resumePath}. Open or download it from the Resume button.`,
  };
}

export default function PortfolioApiAgent() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [selected, setSelected] = useState(null);
  const catalog = useMemo(() => answers(), []);

  return (
    <div className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6" data-cosmic-exclude="true">
      {open ? (
        <section className="panel edge-blue flex max-h-[min(34rem,calc(100vh-7.5rem))] w-[min(22.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl">
          <header className="flex items-start justify-between gap-3 border-b border-[var(--line)] px-4 py-3">
            <div>
              <p className="sys-label">PRAVEEN // PORTFOLIO API</p>
              <p className="mt-1 text-sm text-[var(--text-2)]">Ask about my work, projects, stack, or experience.</p>
              <p className="sys-label mt-2 inline-flex items-center gap-2 text-[var(--green)]">
                <span className="status-dot pulse-dot" />
                ONLINE
              </p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-[var(--line)]" aria-label="Close portfolio API">
              <X size={15} />
            </button>
          </header>
          <div className="min-h-0 flex-1 space-y-2 overflow-auto p-3">
            {assistantQuestions.map((item) => (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => setSelected((current) => (current === item.id ? null : item.id))}
                  className={`w-full rounded-2xl border px-3 py-2.5 text-left text-sm transition ${
                    selected === item.id
                      ? "border-[var(--orange)]/50 bg-[var(--bg-panel-2)]"
                      : "border-[var(--line)] hover:border-[var(--line-strong)]"
                  }`}
                >
                  {item.question}
                </button>
                {selected === item.id && (
                  <article className="mt-2 rounded-2xl border border-[var(--line)] bg-[var(--bg-panel-2)] p-3">
                    <p className="sys-label">REQUEST</p>
                    <p className="mt-1 font-mono text-xs text-[var(--blue-2)]">{item.endpoint}</p>
                    <p className="sys-label mt-3">RESPONSE 200 OK</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-2)]">{catalog[item.id]}</p>
                    {item.id === "resume" && (
                      <a href={contact.resumePath} target="_blank" rel="noreferrer" className="btn btn-secondary mt-3 !min-h-9 text-sm">
                        Open resume.pdf
                      </a>
                    )}
                  </article>
                )}
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="flex items-end gap-3">
          {hint && (
            <p className="panel hidden max-w-[12rem] rounded-2xl px-3 py-2 text-sm text-[var(--text-2)] sm:block">
              Ask about my portfolio
            </p>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            onMouseEnter={() => setHint(true)}
            onMouseLeave={() => setHint(false)}
            className="focus-ring float-soft grid h-14 w-14 place-items-center rounded-full border border-[var(--blue-2)]/40 bg-[var(--bg-panel)] shadow-[0_0_22px_rgba(22,131,255,0.28),inset_0_0_0_1px_rgba(249,115,22,0.25)]"
            aria-label="Open Portfolio API assistant"
          >
            <svg viewBox="0 0 48 48" className="h-8 w-8" aria-hidden="true">
              <rect x="12" y="14" width="24" height="20" rx="6" fill="none" stroke="#38A0FF" strokeWidth="1.8" />
              <circle cx="20" cy="23" r="2" fill="#38A0FF" />
              <circle cx="28" cy="23" r="2" fill="#FF8A3D" />
              <path d="M19 30h10" stroke="#F5F7FA" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M24 10v4M16 12l2 3M32 12l-2 3" stroke="#1683FF" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
