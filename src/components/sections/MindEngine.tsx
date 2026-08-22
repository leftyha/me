import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

const nodes = [
  { label: 'Product', x: 50, y: 5 },
  { label: 'Business', x: 10, y: 45 },
  { label: 'Code', x: 90, y: 45 },
  { label: 'Data', x: 25, y: 85 },
  { label: 'Systems', x: 75, y: 85 },
];

export default function MindEngine() {
  const core = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!core.current) return;

    animate(core.current, {
      scale: [1, 1.15, 1],
      duration: 2200,
      loop: true,
      ease: 'inOutSine',
    });

    animate(nodeRefs.current, {
      translateY: [-8, 8],
      duration: 1800,
      delay: (_, i = 0) => i * 120,
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });
  }, []);

  return (
    <section className="mind-engine">
      <div className="mind-copy">
        <p className="eyebrow">How I think</p>
        <h2>Connecting problems, systems and possibilities.</h2>
        <p>I look beyond isolated tasks. I connect product, technology, business and execution to find practical solutions.</p>
      </div>
      <div className="mind-network">
        <div ref={core} className="mind-core" />
        {nodes.map((node, index) => (
          <div key={node.label} ref={(element) => { if (element) nodeRefs.current[index] = element; }} className="mind-node" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
            {node.label}
          </div>
        ))}
      </div>
    </section>
  );
}
