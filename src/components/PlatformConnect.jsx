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
      // 0 when section enters viewport, 1 when centered
      const raw = 1 - rect.top / vh
      setProgress(Math.max(0, Math.min(1, raw)))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [ref])

  return progress
}

// Inline SVG logos
function WhatsAppLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C12.95 4 4 12.95 4 24c0 3.54.93 6.86 2.55 9.73L4 44l10.55-2.77A19.87 19.87 0 0024 44c11.05 0 20-8.95 20-20S35.05 4 24 4z" fill="#25D366"/>
      <path d="M34.6 28.4c-.58-.29-3.44-1.7-3.97-1.89-.54-.2-.93-.29-1.32.29-.39.58-1.51 1.9-1.85 2.28-.34.39-.68.44-1.26.15-.58-.29-2.45-.9-4.67-2.88-1.72-1.54-2.89-3.44-3.23-4.02-.34-.58-.04-.9.25-1.19.26-.26.58-.68.87-1.02.29-.34.39-.58.58-.97.2-.39.1-.73-.05-1.02-.15-.29-1.32-3.18-1.81-4.36-.48-1.14-.96-1-.1.32-1H17.9c-.39 0-1.02.15-1.55.73-.54.58-2.04 2-2.04 4.87 0 2.87 2.09 5.64 2.38 6.03.29.39 4.11 6.27 9.96 8.8 1.39.6 2.48.96 3.33 1.23 1.4.44 2.67.38 3.67.23 1.12-.17 3.44-1.41 3.93-2.77.49-1.36.49-2.53.34-2.77-.15-.25-.54-.39-1.12-.68z" fill="white"/>
    </svg>
  )
}

function InstagramLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ig-grad" x1="7" y1="41" x2="41" y2="7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC107"/>
          <stop offset=".5" stopColor="#F44336"/>
          <stop offset="1" stopColor="#9C27B0"/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#ig-grad)"/>
      <circle cx="24" cy="24" r="8.5" stroke="white" strokeWidth="3" fill="none"/>
      <circle cx="35" cy="13" r="2.5" fill="white"/>
    </svg>
  )
}

function FacebookLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="20" fill="#1877F2"/>
      <path d="M26.5 25.5h4l.5-4h-4.5V19c0-1.1.55-2.17 2.26-2.17H31.5v-3.4s-1.6-.27-3.14-.27c-3.2 0-5.3 1.94-5.3 5.45V21.5H19v4h4.06V36.1a16.16 16.16 0 005 0V25.5z" fill="white"/>
    </svg>
  )
}

function EmailLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="10" width="40" height="28" rx="4" fill="#EA4335"/>
      <path d="M4 14l20 12 20-12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

function StorefrontIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="28" width="48" height="28" rx="3" fill="#1C1917" fillOpacity="0.9"/>
      <path d="M8 20h48l-4 12H12L8 20z" fill="#E05252"/>
      <path d="M16 16h32l4 4H12l4-4z" fill="#1C1917"/>
      <rect x="20" y="38" width="10" height="18" rx="1" fill="#FAF8F7"/>
      <rect x="36" y="38" width="12" height="10" rx="1" fill="#FAF8F7" fillOpacity="0.6"/>
    </svg>
  )
}

export default function PlatformConnect() {
  const sectionRef = useRef(null)
  const progress = useScrollProgress(sectionRef)

  // Eased progress for smoother animation
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2

  // Boxes start 120px apart, come to 0
  const offset = (1 - eased) * 120

  // Connection line grows from center
  const lineWidth = eased * 100

  // Pulse opacity for the connection spark
  const sparkOpacity = eased > 0.85 ? (eased - 0.85) / 0.15 : 0

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 bg-dark text-white overflow-clip bg-grain-dark">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-rojho/15 text-rojho-light text-xs font-semibold uppercase tracking-wider rounded-full">
              Así Funciona
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold">
              Conectamos tus canales con{' '}
              <span className="text-rojho">inteligencia</span>
            </h2>
            <p className="mt-4 text-white/60 text-lg">
              Tu negocio y tus plataformas, trabajando como uno solo.
            </p>
          </div>
        </ScrollReveal>

        {/* Connection animation */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-8 py-12 min-h-[280px]">
          {/* Left: Business box */}
          <div
            className="relative flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl border border-white/10 bg-dark-card w-40 sm:w-52 shrink-0 transition-transform"
            style={{ transform: `translateX(-${offset}px)` }}
          >
            <StorefrontIcon className="w-16 h-16 sm:w-20 sm:h-20" />
            <span className="text-sm sm:text-base font-bold text-white">Tu Negocio</span>
          </div>

          {/* Center: Connection visualization */}
          <div className="relative flex items-center justify-center w-16 sm:w-24">
            {/* Connection line */}
            <div
              className="h-0.5 bg-gradient-to-r from-rojho/60 via-rojho to-rojho/60 rounded-full"
              style={{ width: `${lineWidth}%`, transition: 'none' }}
            />
            {/* Spark at connection point */}
            <div
              className="absolute w-4 h-4 bg-rojho rounded-full blur-sm"
              style={{ opacity: sparkOpacity }}
            />
            <div
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{ opacity: sparkOpacity }}
            />
          </div>

          {/* Right: Platforms box */}
          <div
            className="relative flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl border border-white/10 bg-dark-card w-40 sm:w-52 shrink-0"
            style={{ transform: `translateX(${offset}px)` }}
          >
            <div className="grid grid-cols-2 gap-3">
              <WhatsAppLogo className="w-10 h-10 sm:w-12 sm:h-12" />
              <InstagramLogo className="w-10 h-10 sm:w-12 sm:h-12" />
              <FacebookLogo className="w-10 h-10 sm:w-12 sm:h-12" />
              <EmailLogo className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <span className="text-sm sm:text-base font-bold text-white">Tus Canales</span>
          </div>
        </div>

        {/* Status text that appears on connection */}
        <div
          className="text-center mt-8 transition-all duration-500"
          style={{
            opacity: sparkOpacity,
            transform: sparkOpacity > 0 ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <p className="text-rojho font-semibold text-lg">Conexión establecida</p>
          <p className="text-white/50 text-sm mt-1">
            Respuestas automáticas activas en todos tus canales
          </p>
        </div>
      </div>
    </section>
  )
}
