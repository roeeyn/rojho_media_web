import { Compass, Palette, Rocket } from 'lucide-react'

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
    <section className="py-20 lg:py-28 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-rojho/15 text-rojho-light text-xs font-semibold uppercase tracking-wider rounded-full">
            Nuestro Enfoque
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold">
            Estrategia y creatividad.{' '}
            <span className="text-rojho">Los resultados llegan solos.</span>
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            No solo hacemos que las cosas se vean bien — construimos sistemas
            de medios que mueven a las personas de la atención a la acción.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
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
        </div>
      </div>
    </section>
  )
}
