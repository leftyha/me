import { useLanguage } from "@/hooks/useLanguage";
import { usePinnedScrollProgress } from "@/hooks/usePinnedScrollProgress";
import { useScrollSteps } from "@/hooks/useScrollSteps";

const ACCENTS = ["var(--orange)", "var(--teal)", "var(--gold)", "var(--cyan)", "var(--blue)", "var(--coral)"];

export function WhyMe() {
  const { t } = useLanguage();
  const { ref, progress } = usePinnedScrollProgress<HTMLElement>({ startHold: 0.06, endHold: 0.1 });
  const { index: selected, select } = useScrollSteps(progress, t.why.pairs.length);

  return (
    <section id="why" ref={ref} className="scroll-story scroll-story-impact">
      <div className="scroll-story-stage">
        <div className="story-content mx-auto w-full max-w-6xl px-4">
          <header className="story-header max-w-3xl">
            <p className="kicker">{t.why.kicker}</p>
            <h2 className="story-title mt-3">{t.why.title}</h2>
            <p className="story-copy mt-4">{t.why.copy}</p>
          </header>

          <ul className="story-body impact-grid mt-7">
            {t.why.pairs.map((pair, index) => {
              const accent = ACCENTS[index % ACCENTS.length] as string;
              const isActive = index === selected;
              return (
                <li key={pair.from}>
                  <button type="button" onClick={() => select(index)} aria-pressed={isActive} className={`impact-card panel ${isActive ? "is-active" : ""}`} style={isActive ? { borderColor: accent, boxShadow: `0 20px 50px color-mix(in oklab, ${accent} 16%, transparent)` } : undefined}>
                    <span className="kicker">{t.why.inLabel}</span>
                    <span className="mt-2 block text-base text-ink-soft">{pair.from}</span>
                    <span aria-hidden="true" className="impact-arrow my-4 block h-[2px] w-full origin-left" style={{ background: accent }} />
                    <span className="kicker" style={{ color: accent }}>{t.why.outLabel}</span>
                    <strong className="mt-2 block font-display text-xl">{pair.to}</strong>
                    <span className="mt-3 block text-sm leading-relaxed text-ink-soft">{pair.note}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <ul className="story-tail impact-facts mt-5 flex flex-wrap gap-2">{t.why.facts.map((fact) => <li key={fact} className="tech-pill">{fact}</li>)}</ul>
        </div>
        <div className="story-meter" aria-hidden="true"><span style={{ width: `${progress * 100}%` }} /></div>
      </div>
    </section>
  );
}
