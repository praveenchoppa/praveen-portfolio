import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { contact, identity, links } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="shell scroll-mt-28 py-14 md:py-16">
      <div data-cosmic-exclude="true">
        <p className="sys-label">// CONNECTION LAYER</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s Connect</h2>
        <p className="mt-4 max-w-2xl font-mono text-sm text-[var(--text-3)]">GET /api/v1/contact</p>

        <article className="panel edge-blue mt-8 max-w-2xl rounded-[24px] p-6">
          <p className="sys-label">SYSTEM_ENDPOINT // DIRECT</p>
          <h3 className="mt-3 text-2xl font-medium">{identity.displayName}</h3>
          <div className="mt-6 space-y-3 text-[var(--text-2)]">
            <a href={links.email} className="flex items-center gap-3 hover:text-[var(--text)]">
              <Mail size={16} /> {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="flex items-center gap-3 hover:text-[var(--text)]">
              <Phone size={16} /> {contact.phone}
            </a>
            <p className="pl-7">{contact.location}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={links.github} target="_blank" rel="noreferrer" className="btn btn-secondary !min-h-10 text-sm">
              <Github size={15} /> GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary !min-h-10 text-sm">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={links.leetcode} target="_blank" rel="noreferrer" className="btn btn-secondary !min-h-10 text-sm">
              LeetCode
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
