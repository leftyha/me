import { Hero } from './components/sections/Hero';
import MindEngine from './components/sections/MindEngine';
import SolutionFactory from './components/sections/SolutionFactory';
import ExperienceEngine from './components/sections/ExperienceEngine';
import TechnologyUniverse from './components/sections/TechnologyUniverse';
import SystemsLab from './components/sections/SystemsLab';
import ContactEngine from './components/sections/ContactEngine';
import ExperienceWorld from './engine/ExperienceWorld';
import VisualEngine from './components/sections/VisualEngine';

export default function App() {
  return (
    <ExperienceWorld>
      <main className="page">
        {/* V1 journey: understand the mind before exploring the universe */}
        <Hero />
        <VisualEngine />
        <MindEngine />
        <SolutionFactory />
        <ExperienceEngine />
        <ContactEngine />

        {/* Expansion layers: deeper exploration after the core message */}
        <TechnologyUniverse />
        <SystemsLab />
      </main>
    </ExperienceWorld>
  );
}
