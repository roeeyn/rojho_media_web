import { ArrowRight, TrendingUp, Zap } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { target: 50, suffix: '+', label: 'Proyectos Entregados' },
  { target: 200, suffix: '%', label: 'Crecimiento Prom.' },
  { target: 4.9, suffix: '', decimals: 1, label: 'Calificación' },
  { target: 15, suffix: '+', label: 'Expertos Creativos' },
]

export default function Hero() {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div>
            <ScrollReveal direction="none" duration={500}>
              <span className="inline-block px-4 py-1.5 bg-rojho/10 text-rojho-dark text-xs font-semibold uppercase tracking-wider rounded-full">
                Medios Creativos + Estratégicos
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-charcoal">
                Eleva tu marca con medios creativos{' '}
                <span className="font-display italic text-rojho">estratégicos</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="none" duration={500} delay={150}>
              <p className="mt-6 text-lg text-charcoal/60 max-w-lg leading-relaxed">
                No somos una agencia cualquiera — combinamos mensajes estratégicos,
                narrativa visual y experiencias enfocadas en conversión para ayudar
                a fundadores y negocios modernos a crecer con claridad e impacto.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-charcoal/90 transition-colors duration-200 cursor-pointer"
                >
                  Iniciar un Proyecto
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#services"
                  className="text-sm font-semibold text-charcoal/70 hover:text-charcoal transition-colors duration-200 cursor-pointer"
                >
                  Conoce Más
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute w-80 h-80 bg-rojho/10 rounded-full blur-3xl -z-10" />

            {/* Main dashboard card */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-charcoal/5 p-6 w-72 sm:w-80">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-semibold text-charcoal">
                  Rendimiento de Marca
                </span>
                <span className="text-xs text-rojho-dark font-medium bg-rojho/10 px-2.5 py-1 rounded-full">
                  En vivo
                </span>
              </div>

              <div className="flex items-end gap-1.5 h-28 mb-3">
                {[35, 50, 40, 65, 55, 80, 70, 90, 85, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-rojho to-rojho-light"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              <div className="flex justify-between text-xs text-charcoal/40">
                <span>Ene</span>
                <span>Mar</span>
                <span>Jun</span>
                <span>Sep</span>
              </div>
            </div>

            {/* Floating success card */}
            <div className="absolute -left-4 sm:-left-8 bottom-8 bg-white rounded-xl shadow-lg border border-charcoal/5 p-3 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-lg font-bold text-charcoal">+180%</p>
                <p className="text-xs text-charcoal/50">Crecimiento de engagement</p>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute -right-2 sm:-right-4 top-4 bg-white rounded-xl shadow-lg border border-charcoal/5 px-3 py-2.5 animate-float-delayed">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-rojho" />
                <span className="text-xs font-medium text-charcoal">
                  Campaña activa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 lg:mt-24 rounded-2xl border border-charcoal/10 bg-white/50 backdrop-blur-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl lg:text-4xl font-extrabold text-charcoal">
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                    duration={2000}
                  />
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
