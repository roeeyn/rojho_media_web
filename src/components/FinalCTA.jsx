import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import FloatingOrb from './FloatingOrb'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="scale" duration={700}>
          <div className="relative rounded-3xl bg-charcoal overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Decorative gradients - mouse-reactive */}
            <FloatingOrb className="absolute -top-32 -left-32 w-64 h-64 bg-rojho/20 rounded-full blur-[100px]" speed={20} range={30} />
            <FloatingOrb className="absolute -bottom-28 -right-28 w-80 h-80 bg-rojho/10 rounded-full blur-[120px]" speed={25} range={30} />

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
              <ScrollReveal direction="none" delay={400} duration={500}>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="mailto:hola@rojho.media"
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
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
