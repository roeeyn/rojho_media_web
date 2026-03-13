import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
import ModeFade from './ModeFade'
import { useMode } from '../ModeContext'
import { services } from '../data/content'

export default function Services() {
  const { mode } = useMode()
  const d = services[mode]

  return (
    <section id="services" className="py-20 lg:py-28">
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
          <StaggerGroup key={mode} interval={150} direction="up" as="div" className="mt-14 grid sm:grid-cols-2 gap-6">
            {d.items.map((service, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-charcoal/8 bg-white p-8 hover:shadow-lg hover:border-rojho/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-rojho/10 flex items-center justify-center group-hover:bg-rojho/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-rojho-dark" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-charcoal/20 group-hover:text-rojho transition-colors duration-300" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </StaggerGroup>
        </ModeFade>
      </div>
    </section>
  )
}
