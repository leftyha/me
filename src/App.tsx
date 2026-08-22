import { Hero } from './components/sections/Hero'
import SolutionFactory from './components/sections/SolutionFactory'
import SystemsLab from './components/sections/SystemsLab'
import ExperienceEngine from './components/sections/ExperienceEngine'
import TechnologyUniverse from './components/sections/TechnologyUniverse'

export default function App() {
  return (
    <main className="page">
      <Hero />
      <SolutionFactory />
      <ExperienceEngine />
      <TechnologyUniverse />
      <SystemsLab />
    </main>
  )
}
