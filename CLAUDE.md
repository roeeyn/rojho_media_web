# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Agent Operating Context — RoJho Media

This project is a commercial landing page for RoJho Media, a growth-focused media brand that helps businesses turn digital presence into revenue. When making changes, optimize for business outcomes, not cosmetic complexity.

### Priority Order

1. Message clarity
2. Conversion probability
3. UX quality (especially mobile)
4. Visual polish

### Copy Rules

- Use simple, concrete language
- Lead with outcomes/benefits
- Keep CTAs explicit and action-oriented
- Avoid vague marketing jargon

### UX/Design Rules

- Mobile-first layouts
- Fast loading and clean structure
- Strong visual hierarchy
- Clear CTA placement above and below fold where appropriate

### Guardrails

- Do not invent services, prices, guarantees, or testimonials without explicit source
- Do not add unnecessary complexity that hurts speed or clarity

### Change Workflow

For each non-trivial change:
1. Explain what is changing
2. Explain why it improves conversion/clarity
3. Apply minimal effective diff
4. Summarize final impact

## Commands

```bash
pnpm install      # Install dependencies
pnpm dev          # Start Vite dev server (localhost:5173)
pnpm build        # Production build to dist/
pnpm lint         # ESLint
pnpm preview      # Preview production build locally
```

No test framework is configured.

## Architecture

**Stack:** React 19 + Vite 7 + Tailwind CSS 3 + lucide-react icons. JavaScript only (no TypeScript). Package manager is pnpm.

**Structure:** `App.jsx` composes page sections top-to-bottom. Each section is a standalone component in `src/components/`:

```
Navbar → Hero → PainPoints → Solution → Services → Results → Process → FinalCTA → Footer
```

Navigation uses hash-based anchor links (`#services`, `#process`, `#results`, `#about`, `#contact`) with smooth scrolling — no React Router.

All content (copy, testimonials, stats, services) is hardcoded in components. No CMS, no API calls, no global state. Only `Navbar` uses `useState` for the mobile menu toggle.

## Design Tokens (tailwind.config.js)

Custom color palette — use these instead of default Tailwind colors:
- **cream** (`#FAF8F7`) — light background
- **charcoal** (`#1C1917`) — dark text/backgrounds
- **rojho** (`#E05252`) / rojho-light / rojho-dark — brand red
- **dark** (`#0F0B0B`) / dark-card / dark-lighter — dark mode surfaces

Fonts: `font-sans` = Inter, `font-display` = Playfair Display (serif headings).

Custom animations: `animate-float` and `animate-float-delayed` for subtle Y-axis movement.

## Deployment

Deployed to Netlify. `public/_redirects` handles SPA fallback routing. Build output goes to `dist/`.
