import { Star, Quote } from 'lucide-react'

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
  { value: '2x', label: 'Aumento Prom. en Conversión' },
  { value: '300+', label: 'Piezas de Contenido' },
  { value: '95%', label: 'Retención de Clientes' },
  { value: '50+', label: 'Marcas Transformadas' },
]

export default function Results() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Testimonials */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
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
        </div>

        {/* KPIs */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-dark-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {kpis.map((kpi, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl lg:text-4xl font-extrabold text-rojho">
                  {kpi.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/40">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
