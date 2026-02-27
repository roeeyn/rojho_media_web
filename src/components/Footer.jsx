import { ArrowUpRight } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proceso', href: '#process' },
  { name: 'Resultados', href: '#results' },
]

const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/rojhomedia' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/rojhomedia' },
  { name: 'X / Twitter', href: 'https://x.com/rojhomedia' },
]

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="text-2xl font-bold text-charcoal tracking-tight"
            >
              RoJho<span className="text-rojho">.</span>
            </a>
            <p className="mt-4 text-sm text-charcoal/50 leading-relaxed max-w-xs">
              Medios creativos estratégicos para fundadores, creadores y negocios
              modernos que quieren crecer con claridad e impacto.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal/50 hover:text-charcoal transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-4">
              Síguenos
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-charcoal transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-charcoal mb-4">
              Contáctanos
            </h4>
            <a
              href="mailto:hello@rojhomedia.com"
              className="text-sm text-charcoal/50 hover:text-charcoal transition-colors duration-200 cursor-pointer"
            >
              hello@rojhomedia.com
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-charcoal/40">
            &copy; {new Date().getFullYear()} RoJho Media. Todos los derechos reservados.
          </p>
          <p className="text-xs text-charcoal/40">
            Diseñado con claridad. Construido para convertir.
          </p>
        </div>
      </div>
    </footer>
  )
}
