import { PenTool, Video, Monitor, Megaphone, ArrowUpRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'

const services = [
  {
    icon: PenTool,
    title: 'Estrategia y Posicionamiento de Marca',
    description:
      'Definimos tu voz única, audiencia y ventaja competitiva con claridad estratégica que impulsa cada decisión.',
  },
  {
    icon: Video,
    title: 'Producción de Contenido y Medios',
    description:
      'Narrativa visual premium — desde videos de marca hasta sistemas fotográficos y contenido social que captura la atención.',
  },
  {
    icon: Monitor,
    title: 'Landing Pages y Presencia Digital',
    description:
      'Experiencias digitales de alta conversión que se ven premium, cargan rápido y convierten visitantes en clientes.',
  },
  {
    icon: Megaphone,
    title: 'Sistemas Creativos de Campaña',
    description:
      'Creatividad de campaña de principio a fin que funciona en todos los canales, mantiene la marca y escala con tu crecimiento.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-rojho/10 text-rojho-dark text-xs font-semibold uppercase tracking-wider rounded-full">
              Lo Que Hacemos
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-charcoal">
              Todo lo que tu marca necesita para{' '}
              <span className="font-display italic text-rojho">brillar</span>
            </h2>
            <p className="mt-4 text-charcoal/60 text-lg">
              De la estrategia a la ejecución, ofrecemos un stack completo de
              medios diseñado para fundadores que quieren resultados reales.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGroup interval={150} direction="up" as="div" className="mt-14 grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => (
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
      </div>
    </section>
  )
}
