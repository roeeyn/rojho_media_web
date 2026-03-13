import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
import FloatingOrb from './FloatingOrb'
import ModeFade from './ModeFade'
import { useMode } from '../ModeContext'
import { solution } from '../data/content'

export default function Solution() {
  const { mode } = useMode()
  const d = solution[mode]

  return (
    <section className="relative py-20 lg:py-28 bg-dark text-white overflow-clip bg-grain-dark">
      {/* Floating background orbs */}
      <FloatingOrb className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rojho/20 rounded-full blur-[150px] pointer-events-none" speed={20} range={45} />
      <FloatingOrb className="absolute bottom-1/4 left-0 w-96 h-96 bg-rojho/15 rounded-full blur-[150px] pointer-events-none" speed={25} range={35} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <ModeFade>
              <span className="inline-block px-4 py-1.5 bg-rojho/15 text-rojho-light text-xs font-semibold uppercase tracking-wider rounded-full">
                {d.badge}
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold">
                {d.title}
              </h2>
            </ModeFade>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <ModeFade>
              <p className="mt-4 text-white/60 text-lg">
                {d.description}
              </p>
            </ModeFade>
          </ScrollReveal>
        </div>

        <ModeFade>
          <StaggerGroup key={mode} interval={200} direction="up" as="div" className="mt-14 grid md:grid-cols-3 gap-6">
            {d.steps.map((step, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-dark-card p-8 hover:border-rojho/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-rojho/10 flex items-center justify-center group-hover:bg-rojho/20 transition-colors duration-300">
                    <step.icon className="w-6 h-6 text-rojho" />
                  </div>
                  <span className="text-sm font-bold text-white/20">
                    {step.phase}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </ModeFade>
      </div>
    </section>
  )
}
