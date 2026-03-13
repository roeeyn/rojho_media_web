import { useMode, MODES } from '../ModeContext'
import { Sparkles, Cpu } from 'lucide-react'

export default function ModeToggle() {
  const { mode, setMode } = useMode()
  const isGrowth = mode === MODES.GROWTH

  return (
    <div className="inline-flex items-center rounded-full bg-charcoal/5 p-1 border border-charcoal/8">
      <button
        onClick={() => setMode(MODES.GROWTH)}
        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
          isGrowth
            ? 'bg-charcoal text-cream shadow-md'
            : 'text-charcoal/50 hover:text-charcoal/70'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5" />
        Haz Crecer tu Marca
      </button>
      <button
        onClick={() => setMode(MODES.AUTOMATION)}
        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
          !isGrowth
            ? 'bg-charcoal text-cream shadow-md'
            : 'text-charcoal/50 hover:text-charcoal/70'
        }`}
      >
        <Cpu className="w-3.5 h-3.5" />
        Automatiza tu Negocio
      </button>
    </div>
  )
}
