import { profile } from '../../data/profile';

export function Hero() {
  return (
    <section className="hero">
      <p>{profile.roles.join(' · ')}</p>
      <h1>{profile.name}</h1>
      <h2>{profile.philosophy}</h2>
    </section>
  );
}
