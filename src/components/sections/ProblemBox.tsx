import { useEffect, useRef } from 'react';
import { animate, createTimeline } from 'animejs';

export default function ProblemBox() {
  const box = useRef<HTMLDivElement>(null);
  const nodes = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!box.current) return;

    const timeline = createTimeline({ loop: true });

    timeline
      .add(box.current, {
        rotateX: [0, 360],
        rotateY: [0, 180],
        duration: 5000,
        ease: 'inOutSine',
      })
      .add(nodes.current, {
        translateX: [0, 25],
        translateY: [0, -25],
        scale: [1, 1.4],
        duration: 1200,
        ease: 'outExpo',
      })
      .add(nodes.current, {
        translateX: 0,
        translateY: 0,
        scale: 1,
        duration: 1500,
        ease: 'inOutQuad',
      });
  }, []);

  const addNode = (node: HTMLDivElement | null) => {
    if (node && !nodes.current.includes(node)) nodes.current.push(node);
  };

  return (
    <div className="problem-scene">
      <div ref={box} className="problem-box">
        <div className="box-layer layer-one" />
        <div className="box-core" />
        <div ref={addNode} className="node node-a" />
        <div ref={addNode} className="node node-b" />
        <div ref={addNode} className="node node-c" />
        <div className="solution-ring" />
      </div>
      <p>Chaos → Structure → Solution</p>
    </div>
  );
}
