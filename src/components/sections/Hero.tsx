import { useEffect, useState } from 'react';
import { profile } from '../../data/profile';

const nodes = [
  { label: 'Data', x: 30, y: 20 },
  { label: 'APIs', x: 78, y: 30 },
  { label: 'Business', x: 20, y: 70 },
  { label: 'Users', x: 80, y: 72 },
  { label: 'Systems', x: 50, y: 8 },
  { label: 'Automation', x: 50, y: 90 },
];

export function Hero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const value = Math.min(Math.max(window.scrollY / (window.innerHeight * 1.2), 0), 1);
      setProgress(value);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const stage = progress * 100;

  return (
    <section className="hero-engine-stage">
      <div className="hero-copy">
        <p className="eyebrow">{profile.roles.join(' · ')}</p>
        <h1>{profile.name}</h1>
        <h2>Recibo complejidad. Devuelvo sistemas que funcionan.</h2>
        <p className="hero-description">
          Más de 7 años convirtiendo problemas ambiguos en sistemas backend,
          integraciones, productos y soluciones listas para producción.
        </p>
        <div className="hero-actions">
          <button>Explorar mi recorrido</button>
          <button className="secondary">Contacto</button>
        </div>
        <p className="scroll-hint">Haz scroll para encender el motor</p>
      </div>

      <div className="solution-engine" style={{ ['--progress' as string]: progress }}>
        <svg viewBox="0 0 600 600" className="engine-svg">
          {nodes.map((node) => (
            <line
              key={node.label}
              x1={node.x * 6}
              y1={node.y * 6}
              x2={300 + (node.x - 50) * (1 - progress) * 2}
              y2={300 + (node.y - 50) * (1 - progress) * 2}
              className="engine-link"
            />
          ))}
        </svg>

        {nodes.map((node) => (
          <div
            key={node.label}
            className="engine-node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: `translate(-50%, -50%) scale(${1 + progress * .15})`,
            }}
          >
            {node.label}
          </div>
        ))}

        <div className="engine-core">
          <div className="core-ring" />
          <strong>{stage.toFixed(0)}%</strong>
          <span>{progress < 1 ? 'Pensamiento' : 'Sistema listo'}</span>
        </div>

        <div className="engine-output">
          <span>Complejidad</span>
          <b>→</b>
          <span>Arquitectura</span>
          <b>→</b>
          <span>Sistemas</span>
        </div>
      </div>
    </section>
  );
}
