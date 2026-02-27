import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const links = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#services' },
  { name: 'Proceso', href: '#process' },
  { name: 'Resultados', href: '#results' },
  { name: 'Nosotros', href: '#about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-charcoal tracking-tight">
          RoJho<span className="text-rojho">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal/60 hover:text-charcoal transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-charcoal text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-charcoal/90 transition-colors duration-200 cursor-pointer"
          >
            Comenzar
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 cursor-pointer"
          aria-label="Abrir menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-charcoal/5 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-3 text-sm font-medium text-charcoal/70 hover:text-charcoal cursor-pointer"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 bg-charcoal text-cream px-5 py-2.5 rounded-full text-sm font-medium cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Comenzar
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  )
}
