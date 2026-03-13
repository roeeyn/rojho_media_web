import { ModeProvider } from './ModeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solution from './components/Solution'
import Services from './components/Services'
import Results from './components/Results'
import Process from './components/Process'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <ModeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <PainPoints />
        <Solution />
        <Services />
        <Results />
        <Process />
        <FinalCTA />
        <Footer />
      </div>
    </ModeProvider>
  )
}
