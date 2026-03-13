import { useRef, useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'

// Track how far we've scrolled through a tall container (0 → 1)
function useStickyProgress(containerRef) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setProgress(1)
      return
    }

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // Container top relative to viewport top
      // Progress: 0 when container top hits viewport top, 1 when container bottom hits viewport bottom
      const scrollableDistance = rect.height - vh
      if (scrollableDistance <= 0) {
        setProgress(1)
        return
      }
      const raw = -rect.top / scrollableDistance
      setProgress(Math.max(0, Math.min(1, raw)))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [containerRef])

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

const RING_1 = getPositions(6, 0, 50)
const RING_2 = getPositions(10, 1, 85)
const RING_3 = getPositions(14, 2, 120)
const RING_4 = getPositions(20, 3, 155)
const RING_5 = getPositions(26, 4, 190)

const ALL_PEOPLE = [
  ...RING_1.map((p) => ({ ...p, threshold: 0 })),
  ...RING_2.map((p, i) => ({ ...p, threshold: 0.1 + i * 0.04 })),
  ...RING_3.map((p, i) => ({ ...p, threshold: 0.25 + i * 0.03 })),
  ...RING_4.map((p, i) => ({ ...p, threshold: 0.5 + i * 0.015 })),
  ...RING_5.map((p, i) => ({ ...p, threshold: 0.7 + i * 0.01 })),
]

export default function AudienceGrowth() {
  const containerRef = useRef(null)
  const progress = useStickyProgress(containerRef)

  // Eased progress
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2

  const audience = Math.round(eased * 10000)

  return (
    <section ref={containerRef} className="relative bg-grain" style={{ height: '200vh' }}>
      {/* Sticky inner content — pins to viewport while scrolling through the tall section */}
      <div className="flex items-center justify-center overflow-hidden" style={{ position: 'sticky', top: 0, height: '100vh' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <ScrollReveal>
            <div className="relative z-20 text-center max-w-2xl mx-auto mb-10">
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
          <div className="relative z-10 flex justify-center">
            <div className="relative scale-[0.72] sm:scale-100 origin-center" style={{ width: 420, height: 420 }}>
              {/* Concentric ring outlines */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[100, 170, 240, 310, 380].map((size, i) => {
                  const thresholds = [0, 0.1, 0.25, 0.5, 0.7]
                  const opacities = [1, 0.6, 0.4, 0.3, 0.2]
                  return (
                    <div
                      key={i}
                      className="absolute rounded-full border border-charcoal/5 transition-opacity duration-500"
                      style={{
                        width: size,
                        height: size,
                        opacity: eased > thresholds[i] ? opacities[i] : 0,
                      }}
                    />
                  )
                })}
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
                      className={`absolute w-5 h-5 sm:w-6 sm:h-6 ${colors[i % colors.length]} transition-all duration-500`}
                      style={{
                        left: `calc(50% + ${person.x}px - 10px)`,
                        top: `calc(50% + ${person.y}px - 10px)`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0.3)',
                      }}
                    />
                  )
                })}
              </div>

              {/* Center counter with background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center bg-cream/90 backdrop-blur-sm rounded-full px-6 py-4 shadow-sm">
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

          {/* Bottom text */}
          <div
            className="mt-6 text-center transition-all duration-500"
            style={{
              opacity: eased > 0.85 ? 1 : 0,
              transform: eased > 0.85 ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <p className="text-rojho font-semibold text-lg">Tu comunidad sigue creciendo</p>
            <p className="text-charcoal/50 text-sm mt-1">
              Cada conexión se convierte en una oportunidad de negocio
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
