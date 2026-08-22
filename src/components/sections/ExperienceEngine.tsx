const milestones = [
  {
    title: 'Enterprise Systems',
    text: 'Building and maintaining systems where reliability, scale and business rules matter.'
  },
  {
    title: 'Backend Engineering',
    text: 'Designing APIs, integrations and services that connect complex processes.'
  },
  {
    title: 'Financial Platforms',
    text: 'Working with payment flows, transactional systems and high-impact applications.'
  },
  {
    title: 'Product Building',
    text: 'Turning ideas into usable experiences through technology and experimentation.'
  }
]

export default function ExperienceEngine() {
  return (
    <section className="experience-engine">
      <p className="eyebrow">Experience Engine</p>
      <h2>A journey from systems to solutions.</h2>
      <div className="experience-flow">
        {milestones.map((item) => (
          <article key={item.title} className="experience-node">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
