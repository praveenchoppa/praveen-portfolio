import { ArrowUpRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import ProfilePhoto from "../components/ProfilePhoto";
import { contact, education, identity, links } from "../data/portfolioData";

const fields = [
  { label: "NAME", value: identity.fullName },
  { label: "EDUCATION", value: education.shortInstitution },
  { label: "DEGREE", value: education.degreeShort, accent: true },
  { label: "PRIMARY STACK", value: identity.primaryStack },
  { label: "FOCUS", value: identity.focus },
  { label: "STATUS", value: identity.status, success: true },
];

export default function Hero() {
  return (
    <section id="hero" className="shell scroll-mt-28 pb-16 pt-10 md:pb-20 md:pt-14">
      <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10" data-cosmic-exclude="true">
        <div>
          <p className="sys-label mb-5">SYSTEM ENTRY POINT // BACKEND ARCHITECTURE</p>
          <h1 className="max-w-[15ch] text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            {identity.headlineLead}
            <br />
            building <span className="grad-secure">{identity.headlineSecure}</span>
            <br />
            {identity.headlineMid}
            <br />
            <span className="grad-future">{identity.headlineFuture}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-2)] sm:text-[1.05rem]">
            {identity.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowUpRight size={16} />
            </a>
            <a
              href={contact.resumePath}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <FileDown size={16} />
              Download Resume
            </a>
          </div>
          <div className="mt-8">
            <p className="sys-label mb-3">Connect</p>
            <div className="flex flex-wrap gap-2">
              <SocialLink href={links.github} label="GitHub">
                <Github size={16} />
              </SocialLink>
              <SocialLink href={links.linkedin} label="LinkedIn">
                <Linkedin size={16} />
              </SocialLink>
              <SocialLink href={links.leetcode} label="LeetCode">
                <span className="font-mono text-xs">LC</span>
              </SocialLink>
              <SocialLink href={links.email} label="Email">
                <Mail size={16} />
              </SocialLink>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_0.82fr] lg:grid-cols-1 xl:grid-cols-[1fr_0.86fr]">
          <article className="panel edge-blue rounded-[22px] p-5">
            <div className="mb-5 flex items-center justify-between gap-3">
              <p className="sys-label">NODE_ID // {identity.nodeId}</p>
              <span className="sys-label inline-flex items-center gap-2 text-[var(--green)]">
                <span className="status-dot pulse-dot" />
                ONLINE
              </span>
            </div>
            <dl className="space-y-3.5">
              {fields.map((field) => (
                <div key={field.label} className="grid gap-1">
                  <dt className="sys-label">{field.label}</dt>
                  <dd
                    className={`text-[0.98rem] leading-6 ${
                      field.success
                        ? "text-[var(--green)]"
                        : field.accent
                          ? "text-[var(--orange-2)]"
                          : "text-[var(--text)]"
                    }`}
                  >
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
      className="focus-ring inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--text-2)] hover:border-[var(--line-strong)] hover:text-[var(--text)]"
    >
      {children}
      {label}
    </a>
  );
}
