import ProblemBox from './ProblemBox';
import { profile } from '../../data/profile';

export function Hero() {
  return (
    <section className="hero-stage">
      <div className="hero-copy">
        <p className="eyebrow">{profile.roles.join(' · ')}</p>
        <h1>{profile.name}</h1>
        <h2>{profile.philosophy}</h2>
        <p className="hero-description">
          I build software, systems and automations that transform complex
          problems into working solutions.
        </p>
        <div className="hero-actions">
          <button>Explore my work</button>
          <button className="secondary">Contact</button>
        </div>
      </div>
      <ProblemBox />
    </section>
  );
}
