import { contact, identity, navigation } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] pb-24 pt-10 md:pb-10">
      <div className="shell grid gap-8 md:grid-cols-[1.2fr_1fr_0.7fr]" data-cosmic-exclude="true">
        <div>
          <p className="font-medium">
            {identity.brand} <span className="text-[var(--orange)]">//</span> BACKEND ENGINEERING
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--text-2)]">{identity.tagline}</p>
        </div>
        <div>
          <p className="sys-label">System endpoints</p>
          <div className="mt-3 flex flex-col gap-2">
            <a href="#pipeline" className="text-sm text-[var(--text-2)] hover:text-[var(--text)]">
              Pipeline
            </a>
            {navigation.map((item) => (
              <a key={item.id} href={item.href} className="text-sm text-[var(--text-2)] hover:text-[var(--text)]">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="sys-label">Resources</p>
          <a href={contact.resumePath} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm text-[var(--blue-2)]">
            Download resume PDF
          </a>
          <p className="sys-label mt-6 inline-flex items-center gap-2">
            <span className="status-dot pulse-dot" />
            SYSTEMS ONLINE
          </p>
        </div>
      </div>
    </footer>
  );
}
