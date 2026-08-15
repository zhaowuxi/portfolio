import { useScrollReveal } from './hooks/useScrollReveal'
import Hero from './sections/Hero'
import Divider from './sections/Divider'
import Showcase from './sections/Showcase'
import Career from './sections/Career'
import Footer from './sections/Footer'
import CursorTrail from './components/CursorTrail'
import DynamicIsland from './components/DynamicIsland'

export default function App() {
  // Activate scroll reveal observers
  useScrollReveal()

  return (
    <div className="app">
      <CursorTrail />
      <DynamicIsland />
      <main>
        <Hero />
        <Divider />
        <Showcase />
        <Career />
      </main>
      <Footer />
    </div>
  )
}
