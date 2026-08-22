import { Hero } from './components/sections/Hero'
import MindEngine from './components/sections/MindEngine'
import VisualEngine from './components/sections/VisualEngine'
import SolutionFactory from './components/sections/SolutionFactory'
import ExperienceEngine from './components/sections/ExperienceEngine'
import TechnologyUniverse from './components/sections/TechnologyUniverse'
import SystemsLab from './components/sections/SystemsLab'
import ContactEngine from './components/sections/ContactEngine'

export default function App() {
  return (
    <main className="page">
      <VisualEngine />
      <Hero />
      <MindEngine />
      <SolutionFactory />
      <ExperienceEngine />
      <TechnologyUniverse />
      <SystemsLab />
      <ContactEngine />
    </main>
  )
}
