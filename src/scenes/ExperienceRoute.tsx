import { useLanguage } from "@/hooks/useLanguage";
import { usePinnedScrollProgress } from "@/hooks/usePinnedScrollProgress";
import { useScrollSteps } from "@/hooks/useScrollSteps";

export function ExperienceRoute() {
  const { t } = useLanguage();
  const { ref, progress } = usePinnedScrollProgress<HTMLElement>();
  const jobs = t.experience.jobs;
  const { index: selected, select } = useScrollSteps(progress, jobs.length);
  const current = jobs[selected]!;

  return (
    <section id="experience" ref={ref} className="scroll-story scroll-story-experience">
      <div className="scroll-story-stage">
        <div className="story-content mx-auto w-full max-w-6xl px-4">
          <header className="max-w-3xl">
            <p className="kicker">{t.experience.kicker}</p>
            <h2 className="story-title mt-3">{t.experience.title}</h2>
            <p className="story-copy mt-4">{t.experience.copy}</p>
          </header>

          <div className="mt-7 grid gap-5 lg:grid-cols-[0.43fr_1.57fr]">
            <ol className="experience-nav" aria-label={t.experience.hint}>
              {jobs.map((job, index) => {
                const isActive = index === selected;
                return (
                  <li key={job.id}>
                    <button type="button" onClick={() => select(index)} aria-pressed={isActive} className={`experience-nav-button ${isActive ? "is-active" : ""}`}>
                      <span className="font-mono text-xs tabular-nums text-orange">{String(index + 1).padStart(2, "0")}</span>
                      <span className="min-w-0"><strong className="block truncate font-display text-sm">{job.company}</strong><span className="mt-0.5 block text-xs text-ink-soft">{job.period}</span></span>
                    </button>
                  </li>
                );
              })}
            </ol>

            <article key={current.id} className="experience-detail panel">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line p-6 sm:p-8">
                <div>
                  <p className="kicker text-teal">{current.period} · {current.place}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{current.company}</h3>
                  <p className="mt-2 text-lg text-gold">{current.role}</p>
                </div>
                <p className="font-mono text-xs text-ink-soft">{String(selected + 1).padStart(2, "0")} / {String(jobs.length).padStart(2, "0")}</p>
              </div>
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{current.note}</p>
                  <ul className="mt-6 grid gap-3">
                    {current.impact.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />{item}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl border border-line bg-secondary/70 p-5">
                  <p className="kicker">Stack</p>
                  <ul className="mt-4 flex flex-wrap gap-2">{current.tags.map((tag) => <li key={tag} className="tech-pill">{tag}</li>)}</ul>
                </div>
              </div>
            </article>
          </div>
          <p className="mt-4 text-sm text-ink-soft">{t.experience.hint}</p>
          <div className="story-meter" aria-hidden="true"><span style={{ width: `${progress * 100}%` }} /></div>
        </div>
      </div>
    </section>
  );
}
