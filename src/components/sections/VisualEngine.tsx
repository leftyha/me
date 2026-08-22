import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export default function VisualEngine() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    animate(ref.current.querySelectorAll('.signal'), {
      translateY: [-10, 10],
      opacity: [0.35, 1],
      duration: 1800,
      direction: 'alternate',
      loop: true,
      delay: stagger(150),
      ease: 'inOutSine',
    });
  }, []);

  return (
    <section ref={ref} className="visual-engine">
      <div className="signal" />
      <div className="signal" />
      <div className="signal core" />
      <div className="signal" />
    </section>
  );
}
