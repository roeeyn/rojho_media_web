# rojho_media_web

## What is RoJho Media?

RoJho Media is a growth-focused media/creative brand that helps businesses turn digital presence into revenue.
This repository contains the official landing page used to communicate the offer, position the brand, and convert visitors into qualified leads.

### Core Goal

The landing page is a business asset. Its primary purpose is conversion:
- Generate qualified leads
- Drive discovery calls / contact actions
- Support sales conversations with clear positioning

### Target Audience

Businesses, founders, and personal brands that want better digital presence and measurable business outcomes through strategy + execution.

### Brand Positioning

Clear, direct, premium, and results-oriented communication.
No fluff: every section should explain value, proof, and next step.

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 3
- lucide-react (icons)
- ESLint
- pnpm

## Project Structure

```
src/
├── components/       # One component per landing page section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── PainPoints.jsx
│   ├── Solution.jsx
│   ├── Services.jsx
│   ├── Results.jsx
│   ├── Process.jsx
│   ├── FinalCTA.jsx
│   └── Footer.jsx
├── App.jsx           # Root component (composes all sections)
├── main.jsx          # Entry point
└── index.css         # Tailwind directives
```

## Development

```bash
pnpm install      # Install dependencies
pnpm dev          # Dev server at localhost:5173
pnpm build        # Production build to dist/
pnpm lint         # Run ESLint
pnpm preview      # Preview production build
```

## Deployment

Deployed to Netlify. Build output goes to `dist/`. SPA fallback handled by `public/_redirects`.

## Pre-publish Checklist

- [ ] Copy reviewed: headlines, descriptions, and CTAs reflect current offer
- [ ] Contact info and links are correct (email, socials, CTA destinations)
- [ ] Mobile experience tested (layout, tap targets, readability)
- [ ] `pnpm build` succeeds with no errors
- [ ] `pnpm lint` passes
- [ ] Page loads fast (no large unoptimized assets)
