import { Star, Quote } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
import AnimatedCounter from './AnimatedCounter'

const testimonials = [
  {
    quote:
      'RoJho Media transformó por completo cómo nos presentamos. Nuestra tasa de conversión se duplicó en 3 meses.',
    author: 'Sara K.',
    role: 'Fundadora @ TechBridge',
    stars: 5,
  },
  {
    quote:
      'No solo hacen que las cosas se vean bonitas — piensan estratégicamente. Eso es lo que los distingue de cualquier otra agencia.',
    author: 'Marco L.',
    role: 'CEO @ Elevate Health',
    stars: 5,
  },
  {
    quote:
      'Trabajar con RoJho se sintió como tener un equipo creativo interno que realmente entiende el crecimiento de negocio.',
    author: 'Ana R.',
    role: 'Fundadora @ Bloom Studio',
    stars: 5,
  },
]

const kpis = [
  { target: 2, suffix: 'x', label: 'Aumento Prom. en Conversión' },
  { target: 300, suffix: '+', label: 'Piezas de Contenido' },
  { target: 95, suffix: '%', label: 'Retención de Clientes' },
  { target: 50, suffix: '+', label: 'Marcas Transformadas' },
]

export default function Results() {
  return (
    <section id="results" className="relative py-20 lg:py-28 bg-dark text-white overflow-clip bg-grain-dark">
      {/* Floating background orbs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-rojho/[0.10] rounded-full blur-[120px] animate-orb-drift-slow pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-rojho/[0.08] rounded-full blur-[120px] animate-orb-drift pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-rojho/15 text-rojho-light text-xs font-semibold uppercase tracking-wider rounded-full">
              Pruebas y Resultados
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold">
              No nos creas a nosotros
            </h2>
            <p className="mt-4 text-white/60 text-lg">
              Esto es lo que dicen nuestros clientes — y los números que lo respaldan.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials */}
        <StaggerGroup interval={200} direction="up" as="div" className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
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

        {/* KPIs */}
        <ScrollReveal>
          <div className="mt-14 rounded-2xl border border-white/10 bg-dark-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {kpis.map((kpi, i) => (
                <div key={i} className="text-center">
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
        </ScrollReveal>
      </div>
    </section>
  )
}
