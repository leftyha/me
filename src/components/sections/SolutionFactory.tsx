import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const stages = ['Understand', 'Design', 'Build', 'Integrate', 'Ship'];

export default function SolutionFactory() {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    animate(refs.current, {
      translateX: [-12, 12],
      duration: 1800,
      delay: (_, i = 0) => i * 120,
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });
  }, []);

  return (
    <section className="solution-factory">
      <div>
        <p className="eyebrow">From idea to reality</p>
        <h2>Turning complexity into working systems.</h2>
        <p>Every solution moves through understanding, design, construction and delivery.</p>
      </div>
      <div className="factory-flow">
        {stages.map((stage, index) => (
          <div key={stage} className="factory-node" ref={(el) => { if (el) refs.current[index] = el; }}>
            <span>{stage}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
