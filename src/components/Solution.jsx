import { Compass, Palette, Rocket } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'

const steps = [
  {
    icon: Compass,
    phase: '01',
    title: 'Estrategia',
    description:
      'Comenzamos con un trabajo profundo de posicionamiento — entendiendo a tu audiencia, tu ventaja competitiva y la historia que vende.',
  },
  {
    icon: Palette,
    phase: '02',
    title: 'Creatividad',
    description:
      'Después le damos vida con contenido visual premium, sistemas de marca y medios que conectan con tu gente.',
  },
  {
    icon: Rocket,
    phase: '03',
    title: 'Ejecución',
    description:
      'Finalmente, desplegamos experiencias digitales enfocadas en conversión que transforman la atención en acción y generan resultados medibles.',
  },
]

export default function Solution() {
  return (
    <section className="relative py-20 lg:py-28 bg-dark text-white overflow-clip bg-grain-dark">
      {/* Floating background orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rojho/20 rounded-full blur-[150px] animate-orb-drift pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-rojho/15 rounded-full blur-[150px] animate-orb-drift-reverse pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 bg-rojho/15 text-rojho-light text-xs font-semibold uppercase tracking-wider rounded-full">
              Nuestro Enfoque
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold">
              Estrategia y creatividad.{' '}
              <span className="text-rojho">Los resultados llegan solos.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-4 text-white/60 text-lg">
              No solo hacemos que las cosas se vean bien — construimos sistemas
              de medios que mueven a las personas de la atención a la acción.
            </p>
          </ScrollReveal>
        </div>

        <StaggerGroup interval={200} direction="up" as="div" className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
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
      </div>
    </section>
  )
}
