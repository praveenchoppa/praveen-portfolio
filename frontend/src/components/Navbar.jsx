import { useState } from "react";
import { FileDown, Menu, Moon, Sun, X } from "lucide-react";
import { contact, identity, navigation } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(navigation.map((item) => item.id));

  return (
    <header className="sticky top-0 z-40">
      <div className="shell pt-3">
        <nav className="panel flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 md:px-5" data-cosmic-exclude="true">
          <a href="#hero" className="focus-ring shrink-0 font-medium tracking-wide">
            <span className="text-[var(--text)]">{identity.brand}</span>
            <span className="mx-1.5 text-[var(--orange)]">//</span>
            <span className="text-[var(--text-2)]">{identity.brandSuffix}</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`focus-ring rounded-full px-3 py-2 text-sm transition-colors ${
                  activeId === item.id
                    ? "text-[var(--blue-2)]"
                    : "text-[var(--text-2)] hover:text-[var(--text)]"
                }`}
              >
                <span className="relative">
                  {item.label}
                  {activeId === item.id && (
                    <span className="absolute inset-x-1 -bottom-1 h-px bg-[var(--blue-2)] shadow-[0_0_10px_var(--blue-2)]" />
                  )}
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="sys-label hidden items-center gap-2 sm:inline-flex">
              <span className="status-dot pulse-dot" />
              SYS_ONLINE
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--text-2)] hover:text-[var(--text)]"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a
              href={contact.resumePath}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary !min-h-10 !px-3.5 text-sm"
            >
              <FileDown size={15} />
              <span className="hidden sm:inline">Resume</span>
            </a>
            <button
              type="button"
              className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="panel mt-2 rounded-2xl p-3 lg:hidden" data-cosmic-exclude="true">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring block rounded-xl px-3 py-2.5 text-[var(--text-2)] hover:bg-[var(--bg-panel-2)] hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
