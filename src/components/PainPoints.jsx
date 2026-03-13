import { Eye, MessageSquareOff, TrendingDown } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'

const pains = [
  {
    icon: Eye,
    title: 'Bonito pero sin resultados',
    description:
      'Tu marca se ve increíble por fuera, pero tus visuales no están generando conversiones. Lo bonito solo no paga las cuentas.',
  },
  {
    icon: MessageSquareOff,
    title: 'Mensajes inconsistentes',
    description:
      'Tu voz cambia de plataforma en plataforma. Sin un posicionamiento claro, tu audiencia no puede confiar en ti — ni recordarte.',
  },
  {
    icon: TrendingDown,
    title: 'Sin embudo de historia a venta',
    description:
      'Estás creando contenido sin un camino narrativo claro de la atención a la acción. Atención sin conversión es dinero perdido.',
  },
]

export default function PainPoints() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-grain">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-charcoal/5 text-charcoal/60 text-xs font-semibold uppercase tracking-wider rounded-full">
              ¿Te suena familiar?
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-charcoal">
              Los retos que frenan el crecimiento de tu marca
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg">
              La mayoría de los fundadores saben que algo no está funcionando —
              simplemente no logran identificar qué.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGroup interval={150} direction="up" as="div" className="mt-14 grid md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-charcoal/8 bg-white p-8 hover:shadow-lg hover:border-rojho/30 transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-rojho/10 flex items-center justify-center group-hover:bg-rojho/20 transition-colors duration-300">
                <pain.icon className="w-6 h-6 text-rojho-dark" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-charcoal">
                {pain.title}
              </h3>
              <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
