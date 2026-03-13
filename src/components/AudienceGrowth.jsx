import { useRef, useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'

function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setProgress(1)
      return
    }

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const raw = 1 - rect.top / vh
      setProgress(Math.max(0, Math.min(1, raw)))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [ref])

  return progress
}

// Simple person silhouette SVG
function PersonIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="7" r="4" />
      <path d="M12 13c-4.42 0-8 1.79-8 4v1h16v-1c0-2.21-3.58-4-8-4z" />
    </svg>
  )
}

// Generate positions on concentric circles
function getPositions(count, ring, radius) {
  const positions = []
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 - Math.PI / 2 + ring * 0.3
    positions.push({
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      ring,
    })
  }
  return positions
}

const RING_1 = getPositions(5, 0, 60)   // Inner ring — always visible
const RING_2 = getPositions(8, 1, 110)  // Middle ring — appears at ~30%
const RING_3 = getPositions(12, 2, 165) // Outer ring — appears at ~60%

const ALL_PEOPLE = [
  ...RING_1.map((p) => ({ ...p, threshold: 0 })),
  ...RING_2.map((p, i) => ({ ...p, threshold: 0.2 + i * 0.05 })),
  ...RING_3.map((p, i) => ({ ...p, threshold: 0.45 + i * 0.035 })),
]

export default function AudienceGrowth() {
  const sectionRef = useRef(null)
  const progress = useScrollProgress(sectionRef)

  // Eased
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2

  // Counter text
  const audience = Math.round(eased * 10000)

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-grain">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-charcoal/5 text-charcoal/60 text-xs font-semibold uppercase tracking-wider rounded-full">
              El Poder del Crecimiento
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-charcoal">
              Tu audiencia crece con cada{' '}
              <span className="font-display italic text-rojho">historia</span>
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg">
              Con la estrategia correcta, cada pieza de contenido amplifica tu
              alcance y atrae a las personas indicadas.
            </p>
          </div>
        </ScrollReveal>

        {/* Circle visualization */}
        <div className="relative flex justify-center py-8">
          <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px]">
            {/* Concentric ring outlines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full border border-charcoal/5" />
              <div
                className="absolute w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] rounded-full border border-charcoal/5 transition-opacity duration-500"
                style={{ opacity: eased > 0.2 ? 0.6 : 0 }}
              />
              <div
                className="absolute w-[330px] h-[330px] sm:w-[370px] sm:h-[370px] rounded-full border border-charcoal/5 transition-opacity duration-500"
                style={{ opacity: eased > 0.45 ? 0.4 : 0 }}
              />
            </div>

            {/* People icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              {ALL_PEOPLE.map((person, i) => {
                const isVisible = eased >= person.threshold
                const colors = [
                  'text-rojho',
                  'text-rojho-dark',
                  'text-charcoal/70',
                  'text-charcoal/50',
                  'text-rojho/70',
                ]
                return (
                  <PersonIcon
                    key={i}
                    className={`absolute w-6 h-6 sm:w-7 sm:h-7 ${colors[i % colors.length]} transition-all duration-500`}
                    style={{
                      left: `calc(50% + ${person.x}px - 12px)`,
                      top: `calc(50% + ${person.y}px - 12px)`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'scale(1)' : 'scale(0.3)',
                    }}
                  />
                )
              })}
            </div>

            {/* Center counter */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-charcoal">
                  {audience.toLocaleString()}+
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-charcoal/50 mt-1">
                  Audiencia Alcanzada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats that fade in */}
        <div
          className="mt-8 text-center transition-all duration-500"
          style={{
            opacity: eased > 0.7 ? 1 : 0,
            transform: eased > 0.7 ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <p className="text-rojho font-semibold text-lg">Tu comunidad no deja de crecer</p>
          <p className="text-charcoal/50 text-sm mt-1">
            Cada conexión se convierte en una oportunidad de negocio
          </p>
        </div>
      </div>
    </section>
  )
}
