import { useRef, useState, useEffect } from 'react'
import ScrollReveal from './ScrollReveal'
import storeSvg from '../assets/icons/store.svg'
import whatsappSvg from '../assets/icons/whatsapp.svg'
import instagramSvg from '../assets/icons/instagram.svg'
import messengerSvg from '../assets/icons/messenger.svg'
import emailSvg from '../assets/icons/email.svg'

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

export default function PlatformConnect() {
  const sectionRef = useRef(null)
  const progress = useScrollProgress(sectionRef)

  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2

  const offset = (1 - eased) * 120
  const lineWidth = eased * 100
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
            <img src={storeSvg} alt="Tu Negocio" className="w-16 h-16 sm:w-20 sm:h-20" />
            <span className="text-sm sm:text-base font-bold text-white">Tu Negocio</span>
          </div>

          {/* Center: Connection visualization */}
          <div className="relative flex items-center justify-center w-16 sm:w-24">
            <div
              className="h-0.5 bg-gradient-to-r from-rojho/60 via-rojho to-rojho/60 rounded-full"
              style={{ width: `${lineWidth}%`, transition: 'none' }}
            />
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
              <img src={whatsappSvg} alt="WhatsApp" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src={instagramSvg} alt="Instagram" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src={messengerSvg} alt="Messenger" className="w-10 h-10 sm:w-12 sm:h-12" />
              <img src={emailSvg} alt="Email" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-lg p-1" />
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
