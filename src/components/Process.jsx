import { Search, Lightbulb, Hammer, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Descubrimiento y Estrategia',
    description:
      'Nos sumergimos en tu marca, audiencia y objetivos para construir una base estratégica clara para todo lo que sigue.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Dirección Creativa',
    description:
      'Desarrollamos la dirección visual y narrativa que dará vida a tu marca y conectará con tu audiencia.',
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Producción y Desarrollo',
    description:
      'Nuestro equipo crea contenido premium, diseños y experiencias digitales — todo alineado con tu estrategia.',
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Lanzamiento y Optimización',
    description:
      'Lanzamos, medimos y refinamos para máximo impacto. Cada decisión impulsada por datos y resultados reales.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-rojho/10 text-rojho-dark text-xs font-semibold uppercase tracking-wider rounded-full">
            Cómo Trabajamos
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-charcoal">
            Un proceso probado diseñado para{' '}
            <span className="font-display italic text-rojho">resultados</span>
          </h2>
          <p className="mt-4 text-charcoal/60 text-lg">
            Sin improvisación. Sin esfuerzo desperdiciado. Solo un camino claro
            de la idea al impacto.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
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
        </div>
      </div>
    </section>
  )
}
