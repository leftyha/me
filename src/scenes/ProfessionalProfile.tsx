import { profile } from "@/data/profile";
import { useLanguage } from "@/hooks/useLanguage";

export function ProfessionalProfile() {
  const { t } = useLanguage();

  return (
    <section id="profile" className="profile-section">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
        <div className="profile-signature panel flex min-h-[24rem] flex-col justify-between p-7 sm:p-9">
          <div>
            <p className="kicker">{t.profileSection.kicker}</p>
            <div aria-hidden="true" className="mt-8 grid h-24 w-24 place-items-center rounded-3xl border border-line bg-secondary font-display text-3xl font-bold text-gold">{profile.shortName}</div>
          </div>
          <div>
            <p className="font-display text-3xl font-semibold">{profile.name}</p>
            <p className="mt-2 text-base text-ink-soft">{t.profileSection.role}</p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-teal">{t.profileSection.location}</p>
          </div>
        </div>

        <div className="panel p-7 sm:p-9">
          <h2 className="story-title max-w-3xl">{t.profileSection.title}</h2>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {t.profileSection.highlights.map((item, index) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-line bg-secondary/70 p-4">
                <span className="mt-0.5 font-mono text-xs text-orange">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
            <div><p className="kicker">{t.profileSection.educationLabel}</p><p className="mt-2 font-display text-lg">{t.profileSection.education}</p></div>
            <div><p className="kicker">{t.profileSection.languagesLabel}</p><p className="mt-2 font-display text-lg">{t.profileSection.languages}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
