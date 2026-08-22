import { Hero } from './components/sections/Hero'
import SolutionFactory from './components/sections/SolutionFactory'
import SystemsLab from './components/sections/SystemsLab'

export default function App() {
  return (
    <main className="page">
      <Hero />
      <SolutionFactory />
      <SystemsLab />
    </main>
  )
}
