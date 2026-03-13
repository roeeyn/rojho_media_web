import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
import ModeFade from './ModeFade'
import { useMode } from '../ModeContext'
import { process } from '../data/content'

export default function Process() {
  const { mode } = useMode()
  const d = process[mode]

  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <ModeFade>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-rojho/10 text-rojho-dark text-xs font-semibold uppercase tracking-wider rounded-full">
                {d.badge}
              </span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-charcoal">
                {d.title}
              </h2>
              <p className="mt-4 text-charcoal/60 text-lg">
                {d.description}
              </p>
            </div>
          </ModeFade>
        </ScrollReveal>

        <ModeFade>
          <StaggerGroup key={mode} interval={150} direction="up" as="div" className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {d.steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="group rounded-2xl border border-charcoal/8 bg-white p-8 hover:shadow-lg hover:border-rojho/30 transition-all duration-300 cursor-pointer text-center h-full">
                  <span className="text-xs font-bold text-rojho-dark/40 tracking-wider">
                    {step.number}
                  </span>
                  <div className="mt-3 w-14 h-14 rounded-xl bg-rojho/10 flex items-center justify-center mx-auto group-hover:bg-rojho/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-rojho-dark" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerGroup>
        </ModeFade>
      </div>
    </section>
  )
}
