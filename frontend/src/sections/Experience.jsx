import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="shell scroll-mt-28 py-14 md:py-16">
      <div data-cosmic-exclude="true">
      <p className="sys-label">// PRODUCTION DEPLOYMENT</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
      <p className="mt-4 max-w-2xl text-[var(--text-2)]">
        Internship work represented as a delivery lifecycle — scoped to the solar design module described in my resume, not the entire company platform.
      </p>

      <article className="panel edge-orange mt-8 rounded-[24px] p-5 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="sys-label text-[var(--orange)]">Deployment</p>
            <h3 className="mt-2 text-2xl font-semibold">{experience.company}</h3>
            <p className="mt-1 text-[var(--text-2)]">{experience.role}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-sm text-[var(--orange-2)]">{experience.dates}</p>
            <p className="sys-label mt-1">{experience.mode}</p>
          </div>
        </div>

        <p className="mt-5 max-w-3xl text-[var(--text-2)]">
          Product: <span className="text-[var(--text)]">{experience.product}</span> — {experience.scope}
        </p>

        <div className="mt-6 grid gap-2 sm:grid-cols-5">
          {experience.lifecycle.map((step, index) => (
            <div key={step.id} className="rounded-2xl border border-[var(--line)] bg-[var(--bg-panel-2)] p-3">
              <p className="font-mono text-[0.68rem] text-[var(--orange)]">
                {String(index + 1).padStart(2, "0")} {step.label.toUpperCase()}
              </p>
              <p className="mt-2 text-sm text-[var(--text-2)]">{step.detail}</p>
            </div>
          ))}
        </div>

        <ul className="mt-6 space-y-3 text-[0.98rem] leading-7 text-[var(--text-2)]">
          {experience.responsibilities.map((item) => (
            <li key={item} className="border-l border-[var(--orange)]/40 pl-4">
              {item}
            </li>
          ))}
        </ul>
      </article>
      </div>
    </section>
  );
}
