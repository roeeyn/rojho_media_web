import { ModeProvider, MODES } from './ModeContext'
import { useMode } from './ModeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Solution from './components/Solution'
import Services from './components/Services'
import Results from './components/Results'
import Process from './components/Process'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import AudienceGrowth from './components/AudienceGrowth'
import PlatformConnect from './components/PlatformConnect'

function PageSections() {
  const { mode } = useMode()

  if (mode === MODES.AUTOMATION) {
    return (
      <>
        <Hero />
        <PainPoints />
        <PlatformConnect />
        <Services />
        <Results />
        <Process />
        <FinalCTA />
      </>
    )
  }

  return (
    <>
      <Hero />
      <PainPoints />
      <AudienceGrowth />
      <Solution />
      <Services />
      <Process />
      <Results />
      <FinalCTA />
    </>
  )
}

export default function App() {
  return (
    <ModeProvider>
      <div className="min-h-screen">
        <Navbar />
        <PageSections />
        <Footer />
      </div>
    </ModeProvider>
  )
}
