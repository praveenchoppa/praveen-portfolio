import { coursework, problemSolving, stackLayers } from "../data/portfolioData";

export default function TechnicalStack() {
  return (
    <section id="stack" className="shell scroll-mt-28 py-14 md:py-16">
      <div data-cosmic-exclude="true">
      <p className="sys-label">// INFRASTRUCTURE LAYER</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Technical Stack</h2>
      <p className="mt-4 max-w-2xl text-[var(--text-2)]">
        Skills grouped as infrastructure layers — no invented proficiency scores, only technologies listed on my resume.
      </p>

      <div className="mt-8 grid gap-4">
        {stackLayers.map((layer) => (
          <article key={layer.id} className="panel rounded-[22px] p-5">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
              <p className="sys-label text-[var(--blue-2)]">{layer.layer}</p>
              <h3 className="text-lg font-medium">{layer.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span key={item} className="chip hover-lift rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <article className="panel rounded-[22px] p-5">
          <p className="sys-label">Relevant coursework</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {coursework.map((item) => (
              <span key={item} className="chip rounded-full">
                {item}
              </span>
            ))}
          </div>
        </article>
        <article className="panel rounded-[22px] p-5">
          <p className="sys-label">{problemSolving.label}</p>
          <p className="mt-4 text-sm leading-6 text-[var(--text-2)]">{problemSolving.detail}</p>
        </article>
      </div>
      </div>
    </section>
  );
}
