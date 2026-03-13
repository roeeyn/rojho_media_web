import { ArrowRight } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import FloatingOrb from './FloatingOrb'
import ModeFade from './ModeFade'
import { useMode } from '../ModeContext'
import { finalCTA } from '../data/content'

export default function FinalCTA() {
  const { mode } = useMode()
  const d = finalCTA[mode]

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="scale" duration={700}>
          <div className="relative rounded-3xl bg-charcoal overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Decorative gradients - mouse-reactive */}
            <FloatingOrb className="absolute -top-32 -left-32 w-64 h-64 bg-rojho/20 rounded-full blur-[100px]" speed={20} range={30} />
            <FloatingOrb className="absolute -bottom-28 -right-28 w-80 h-80 bg-rojho/10 rounded-full blur-[120px]" speed={25} range={30} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <ModeFade>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  {d.title}
                </h2>
                <p className="mt-5 text-white/60 text-lg max-w-lg mx-auto">
                  {d.description}
                </p>
              </ModeFade>
              <ScrollReveal direction="none" delay={400} duration={500}>
                <ModeFade>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                      href="mailto:hola@rojho.media"
                      className="inline-flex items-center gap-2 bg-rojho text-charcoal px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-rojho-light transition-colors duration-200 cursor-pointer"
                    >
                      {d.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href={d.ctaSecondaryHref}
                      className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:border-white/40 transition-colors duration-200 cursor-pointer"
                    >
                      {d.ctaSecondary}
                    </a>
                  </div>
                </ModeFade>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
