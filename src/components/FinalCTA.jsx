import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl bg-charcoal overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-rojho/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-rojho/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              ¿Listo para construir una marca que{' '}
              <span className="font-display italic text-rojho">realmente</span>{' '}
              convierta?
            </h2>
            <p className="mt-5 text-white/60 text-lg max-w-lg mx-auto">
              Platiquemos sobre tu marca, tus objetivos y cómo podemos crear
              experiencias de medios que generen resultados reales de negocio.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@rojhomedia.com"
                className="inline-flex items-center gap-2 bg-rojho text-charcoal px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-rojho-light transition-colors duration-200 cursor-pointer"
              >
                Agenda una Llamada
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:border-white/40 transition-colors duration-200 cursor-pointer"
              >
                Ver Nuestro Trabajo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
