import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/useLanguage";
import { profile } from "@/data/profile";

const sections = [
  { id: "experience", key: "experience" as const },
  { id: "lab", key: "lab" as const },
  { id: "profile", key: "about" as const },
];

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${condensed ? "py-2" : "py-4"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4">
        <a href="#arrival" className={`flex items-center gap-2 rounded-full px-3 py-2 font-display text-sm font-semibold tracking-tight transition-all duration-500 ${condensed ? "glass" : ""}`}>
          <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-lg text-[0.7rem] font-bold text-primary-foreground" style={{ background: "var(--gradient-ink)" }}>{profile.shortName}</span>
          <span className="sr-only">{profile.name}</span>
        </a>

        <nav aria-label={t.nav.menu} className={`hidden items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 md:flex ${condensed ? "glass" : ""}`}>
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="rounded-full px-3 py-2 text-sm text-ink-soft transition-colors hover:bg-secondary hover:text-ink">{t.nav[section.key]}</a>
          ))}
        </nav>

        <div className={`flex items-center gap-1.5 rounded-full p-1.5 ${condensed ? "glass" : ""}`}>
          <div role="group" aria-label={t.nav.langLabel} className="flex items-center rounded-full border border-line bg-card/70 p-0.5">
            {(["en", "es"] as const).map((code) => (
              <button key={code} type="button" onClick={() => setLang(code)} aria-pressed={lang === code} className={`min-h-9 rounded-full px-2.5 font-mono text-[0.7rem] uppercase tracking-widest transition-colors ${lang === code ? "bg-ink text-primary-foreground" : "text-ink-soft hover:text-ink"}`}>{code}</button>
            ))}
          </div>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5" style={{ background: "var(--gradient-ink)" }}>{t.nav.cta}</a>
        </div>
      </div>
    </header>
  );
}
