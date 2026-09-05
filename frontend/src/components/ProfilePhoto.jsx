import { useEffect, useState } from "react";

const PROFILE_SRC = "/profile.jpg";

export default function ProfilePhoto() {
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setHasImage(true);
    image.onerror = () => setHasImage(false);
    image.src = PROFILE_SRC;
  }, []);

  return (
    <figure className="relative w-full overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--bg-panel)] shadow-[inset_0_0_0_1px_rgba(22,131,255,0.12),-8px_0_24px_rgba(22,131,255,0.12),8px_0_24px_rgba(249,115,22,0.12)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[var(--blue-2)]/70" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-[var(--orange)]/70" />
      <div className="aspect-[4/5] w-full">
        {hasImage ? (
          <img
            src={PROFILE_SRC}
            alt="Portrait of Choppa Praveen Nooka Vinay Kumar"
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-5 text-center">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 28%, rgba(22,131,255,0.18), transparent 34%), radial-gradient(circle at 74% 72%, rgba(249,115,22,0.16), transparent 32%), linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
                backgroundSize: "auto, auto, 28px 28px, 28px 28px",
              }}
            />
            <svg viewBox="0 0 120 120" className="relative mb-4 h-20 w-20" aria-hidden="true">
              <circle cx="28" cy="30" r="3" fill="#1683FF" />
              <circle cx="92" cy="36" r="3" fill="#F97316" />
              <circle cx="60" cy="78" r="3.5" fill="#38A0FF" />
              <path d="M28 30 L60 78 L92 36" fill="none" stroke="rgba(41,151,255,0.55)" strokeWidth="1.2" />
              <rect x="44" y="20" width="32" height="22" rx="3" fill="none" stroke="rgba(245,247,250,0.28)" />
            </svg>
            <p className="sys-label relative">PROFILE IMAGE // PLACEHOLDER</p>
            <p className="relative mt-2 max-w-[14rem] text-sm text-[var(--text-3)]">
              Add <span className="font-mono text-[var(--text-2)]">frontend/public/profile.jpg</span> to replace this frame.
            </p>
          </div>
        )}
      </div>
      <figcaption className="flex items-center justify-between border-t border-[var(--line)] px-4 py-3">
        <div>
          <p className="font-mono text-[0.68rem] tracking-[0.14em] text-[var(--text-3)]">PRAVEEN</p>
          <p className="text-sm text-[var(--text-2)]">Backend Engineer</p>
        </div>
        <span className="sys-label text-[var(--blue-2)]">ID</span>
      </figcaption>
    </figure>
  );
}
