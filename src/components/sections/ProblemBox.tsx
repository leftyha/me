import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function ProblemBox() {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!box.current) return;

    animate(box.current, {
      rotateX: [0, 360],
      rotateY: [0, 180],
      duration: 6000,
      loop: true,
      ease: 'inOutSine',
    });
  }, []);

  return (
    <div className="problem-scene">
      <div ref={box} className="problem-box">
        <div className="box-core" />
        <div className="node node-a" />
        <div className="node node-b" />
        <div className="node node-c" />
      </div>
      <p>Problem → System → Solution</p>
    </div>
  );
}
