import { ArrowRight, TrendingUp, Zap } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'
import FloatingOrb from './FloatingOrb'
import ModeToggle from './ModeToggle'
import ModeFade from './ModeFade'
import { useMode } from '../ModeContext'
import { hero } from '../data/content'

export default function Hero() {
  const { mode } = useMode()
  const d = hero[mode]

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-grain">
      {/* Floating background orbs */}
      <FloatingOrb className="absolute top-20 -left-32 w-96 h-96 bg-rojho/[0.12] rounded-full blur-3xl pointer-events-none" speed={20} range={40} />
      <FloatingOrb className="absolute bottom-10 -right-24 w-80 h-80 bg-rojho/[0.08] rounded-full blur-3xl pointer-events-none" speed={25} range={35} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Mode Toggle */}
        <ScrollReveal direction="none" duration={400}>
          <div className="flex justify-center mb-10">
            <ModeToggle />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div>
            <ModeFade>
              <ScrollReveal direction="none" duration={500}>
                <span className="inline-block px-4 py-1.5 bg-rojho/10 text-rojho-dark text-xs font-semibold uppercase tracking-wider rounded-full">
                  {d.badge}
                </span>

                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-charcoal">
                  {d.headline}
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="none" duration={500} delay={150}>
                <p className="mt-6 text-lg text-charcoal/60 max-w-lg leading-relaxed">
                  {d.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-charcoal/90 transition-colors duration-200 cursor-pointer"
                  >
                    {d.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#services"
                    className="text-sm font-semibold text-charcoal/70 hover:text-charcoal transition-colors duration-200 cursor-pointer"
                  >
                    {d.ctaSecondary}
                  </a>
                </div>
              </ScrollReveal>
            </ModeFade>
          </div>

          {/* Right visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <FloatingOrb className="absolute w-80 h-80 bg-rojho/10 rounded-full blur-3xl -z-10" speed={30} range={25} />

            {/* Main dashboard card */}
            <ModeFade>
              <div className="relative bg-white rounded-2xl shadow-xl border border-charcoal/5 p-6 w-72 sm:w-80">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-sm font-semibold text-charcoal">
                    {d.dashboardTitle}
                  </span>
                  <span className="text-xs text-rojho-dark font-medium bg-rojho/10 px-2.5 py-1 rounded-full">
                    {d.dashboardBadge}
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
            </ModeFade>

            {/* Floating success card */}
            <div className="absolute -left-4 sm:-left-8 bottom-8 bg-white rounded-xl shadow-lg border border-charcoal/5 p-3 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <ModeFade>
                <div>
                  <p className="text-lg font-bold text-charcoal">{d.floatingCard.value}</p>
                  <p className="text-xs text-charcoal/50">{d.floatingCard.label}</p>
                </div>
              </ModeFade>
            </div>

            {/* Floating notification */}
            <div className="absolute -right-2 sm:-right-4 top-4 bg-white rounded-xl shadow-lg border border-charcoal/5 px-3 py-2.5 animate-float-delayed">
              <ModeFade>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-rojho" />
                  <span className="text-xs font-medium text-charcoal">
                    {d.floatingNotification}
                  </span>
                </div>
              </ModeFade>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <ModeFade>
          <div className="mt-16 lg:mt-24 rounded-2xl border border-charcoal/10 bg-white/50 backdrop-blur-sm p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {d.stats.map((stat, i) => (
                <div key={`${mode}-${i}`} className="text-center">
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
        </ModeFade>
      </div>
    </section>
  )
}
