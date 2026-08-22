import { Hero } from './components/sections/Hero'
import SolutionFactory from './components/sections/SolutionFactory'
import ExperienceEngine from './components/sections/ExperienceEngine'
import TechnologyUniverse from './components/sections/TechnologyUniverse'
import SystemsLab from './components/sections/SystemsLab'
import ContactEngine from './components/sections/ContactEngine'

export default function App() {
  return (
    <main className="page">
      <Hero />
      <SolutionFactory />
      <ExperienceEngine />
      <TechnologyUniverse />
      <SystemsLab />
      <ContactEngine />
    </main>
  )
}
