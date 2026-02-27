import React from 'react'

const links = [
  { label: 'Email', href: 'mailto:hello@rojhomedia.com' },
  { label: 'Instagram', href: 'https://instagram.com/rojhomedia' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/rojhomedia' },
]

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="py-20">
        <Container>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">RoJho Media</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Main Product Landing Page</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              A conversion-focused foundation for the RoJho Media flagship offer. This starter includes hero,
              value proposition blocks, and clear contact actions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-black">Get Started</a>
              <a href="#about" className="rounded-xl border border-white/25 px-5 py-3 text-sm font-medium">Learn More</a>
            </div>
          </div>
        </Container>
      </header>

      <section id="about" className="pb-14">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Positioning', 'Strong positioning message for the main cluster offer.'],
              ['Proof', 'Space for testimonials, client logos, and measurable outcomes.'],
              ['Offer', 'Clear CTA and lead capture flow wired for launch.'],
            ].map(([title, body]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-white/70">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <footer id="contact" className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-white/70">© {new Date().getFullYear()} RoJho Media</p>
            <div className="flex gap-4 text-sm">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-white/80 hover:text-white" target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
