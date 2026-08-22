const technologies = [
  'Python',
  'React',
  'APIs',
  'Cloud',
  'Databases',
  'Automation',
  'Legacy Systems'
]

export default function TechnologyUniverse() {
  return (
    <section className="technology-universe">
      <p className="eyebrow">Technology Universe</p>
      <h2>Tools are only powerful when connected to a purpose.</h2>
      <div className="technology-orbit">
        {technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </section>
  )
}
