import { Star, Quote } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
import AnimatedCounter from './AnimatedCounter'
import FloatingOrb from './FloatingOrb'
import ModeFade from './ModeFade'
import { useMode } from '../ModeContext'
import { results } from '../data/content'

export default function Results() {
  const { mode } = useMode()
  const d = results[mode]

  return (
    <section id="results" className="relative py-20 lg:py-28 bg-dark text-white overflow-clip bg-grain-dark">
      {/* Floating background orbs */}
      <FloatingOrb className="absolute top-10 left-0 w-96 h-96 bg-rojho/15 rounded-full blur-[150px] pointer-events-none" speed={30} range={35} />
      <FloatingOrb className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-rojho/20 rounded-full blur-[150px] pointer-events-none" speed={20} range={45} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <ModeFade>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-rojho/15 text-rojho-light text-xs font-semibold uppercase tracking-wider rounded-full">
                {d.badge}
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold">
                {d.title}
              </h2>
              <p className="mt-4 text-white/60 text-lg">
                {d.description}
              </p>
            </div>
          </ModeFade>
        </ScrollReveal>

        {/* Testimonials */}
        <ModeFade>
          <StaggerGroup key={mode} interval={200} direction="up" as="div" className="mt-14 grid md:grid-cols-3 gap-6">
            {d.testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-dark-card p-8"
              >
                <Quote className="w-8 h-8 text-rojho/40 mb-4" />
                <p className="text-white/80 text-sm leading-relaxed">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-1 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-rojho text-rojho" />
                  ))}
                </div>
                <p className="text-sm font-semibold">{t.author}</p>
                <p className="text-xs text-white/40">{t.role}</p>
              </div>
            ))}
          </StaggerGroup>
        </ModeFade>

        {/* KPIs */}
        <ScrollReveal>
          <ModeFade>
            <div className="mt-14 rounded-2xl border border-white/10 bg-dark-card p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {d.kpis.map((kpi, i) => (
                  <div key={`${mode}-${i}`} className="text-center">
                    <p className="text-3xl lg:text-4xl font-extrabold text-rojho">
                      <AnimatedCounter
                        target={kpi.target}
                        suffix={kpi.suffix}
                        duration={2000}
                      />
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/40">
                      {kpi.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ModeFade>
        </ScrollReveal>
      </div>
    </section>
  )
}
