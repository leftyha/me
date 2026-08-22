export default function WhyMe() {
  return (
    <section id="why-me" className="scene">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="kicker">WHY ME</p>
        <h2 className="mt-3 font-display text-3xl sm:text-5xl">
          I do not just write software. I transform uncertainty into systems.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-ink-soft">
          I combine engineering, product thinking and automation to understand complex problems,
          design solutions and build technology that creates measurable impact.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {['Business thinking', 'Technical execution', 'Creative problem solving'].map((item) => (
            <div key={item} className="panel rounded-3xl p-6">
              <span className="font-display text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
