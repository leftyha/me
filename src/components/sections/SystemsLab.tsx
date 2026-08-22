const experiments = [
  {
    title: 'Customer Intelligence',
    text: 'Exploring how data, behavior and business decisions connect.',
    tags: ['Product', 'Data Systems'],
  },
  {
    title: 'Digital Experiences',
    text: 'Exploring interactions between physical spaces and digital layers.',
    tags: ['Platforms', 'UX'],
  },
  {
    title: 'Emergent Systems',
    text: 'Exploring complex systems created from simple rules.',
    tags: ['Simulation', 'Algorithms'],
  },
];

export default function SystemsLab() {
  return (
    <section className="systems-lab">
      <p className="eyebrow">The Systems Lab</p>
      <h2>Ideas, experiments and systems thinking.</h2>
      <div className="lab-grid">
        {experiments.map((item) => (
          <article key={item.title} className="lab-object">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
