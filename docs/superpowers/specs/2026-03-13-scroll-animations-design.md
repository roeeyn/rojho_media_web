# Scroll Animations Design Spec

**Date:** 2026-03-13
**Goal:** Add scroll-triggered reveal animations to the RoJho Media landing page for a "confident & modern" feel — impressive but elegant.

## Decisions

- **Intensity:** Confident & modern (B-tier) — staggered reveals, counters, scale effects. Not subtle/invisible, not award-show bold.
- **Architecture:** Component wrapper pattern (Option B) — `<ScrollReveal>`, `<StaggerGroup>`, `<AnimatedCounter>` components backed by a `useScrollReveal` hook.
- **Dependencies:** Zero new dependencies. Pure CSS transitions + Intersection Observer API.

## New Files

### `src/hooks/useScrollReveal.js`

Custom hook wrapping Intersection Observer.

- **Returns:** `{ ref, isVisible }`
- **Options:** `threshold` (default `0.15`), `triggerOnce` (default `true`)
- When `triggerOnce` is true, the observer disconnects after the element becomes visible.

### `src/components/ScrollReveal.jsx`

Wrapper component that animates children on scroll entry.

- **Props:**
  - `direction` — `"up"` (default), `"left"`, `"right"`, `"scale"`
  - `delay` — milliseconds (default `0`)
  - `duration` — milliseconds (default `600`)
  - `distance` — pixels for translate (default `30`)
  - `className` — additional classes
  - `as` — HTML element tag (default `"div"`)
- **Behavior:** Applies inline styles for `opacity`, `transform`, and `transition`. Pre-animation state: `opacity: 0` + directional transform. Revealed state: `opacity: 1` + `transform: none`.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)

### `src/components/StaggerGroup.jsx`

Wraps multiple children and auto-assigns incremental delays.

- **Props:**
  - `interval` — milliseconds between each child (default `150`)
  - `direction` — passed to each child `ScrollReveal` (default `"up"`)
  - `className` — additional classes on the container
- **Behavior:** Clones each child (expected to be `ScrollReveal`) and injects `delay={index * interval}`. If children are not `ScrollReveal`, wraps them in one.

### `src/components/AnimatedCounter.jsx`

Animates a number from 0 to a target value.

- **Props:**
  - `target` — the number to count to (required)
  - `duration` — milliseconds (default `2000`)
  - `suffix` — string appended after the number (e.g., `"+"`, `"%"`, `"x"`)
  - `prefix` — string prepended before the number (e.g., `"$"`)
  - `decimals` — decimal places (default `0`)
- **Behavior:** Uses `useScrollReveal` to detect viewport entry. Counts from 0 using `requestAnimationFrame` with an ease-out curve. Displays the final value with suffix/prefix once complete.

## Per-Section Animation Plan

### Hero — Minimal

- **Keep:** Existing `animate-float` and `animate-float-delayed` on dashboard cards.
- **Add:** Subtle fade-in (opacity only, no translate) on headline + subtitle with slight stagger (0ms, 150ms).
- **Add:** `<AnimatedCounter>` on the 4 stats in the bar below the hero (50+, 200%, 4.9, 15+).
- **Rationale:** Above the fold — don't delay content visibility. Counters add motion without blocking readability.

### PainPoints — Medium

- **Section header:** `<ScrollReveal direction="up">` on title + subtitle.
- **Cards:** `<StaggerGroup interval={150} direction="up">` — 3 cards cascade (0ms, 150ms, 300ms).
- **Rationale:** First scroll moment sets the animation tone.

### Solution (Dark Section) — High

- **Section header:** `<ScrollReveal direction="up">` on title.
- **Subtitle paragraph:** `<ScrollReveal direction="up" delay={150}>`.
- **Step cards:** `<StaggerGroup interval={200} direction="up">` — slower stagger for drama.
- **Arrow connectors:** Fade in with their preceding card.
- **Rationale:** Dark bg transition is already dramatic — staggered reveals here feel choreographed.

### Services — Medium

- **Section header:** `<ScrollReveal direction="up">`.
- **Cards:** `<StaggerGroup interval={150} direction="up">` — 4 cards, top row slightly before bottom.
- **Rationale:** Mirrors PainPoints pattern for visual rhythm.

### Results (Testimonials + KPIs) — High

- **Section header:** `<ScrollReveal direction="up">`.
- **Testimonial cards:** `<StaggerGroup interval={200} direction="up">`.
- **KPI stats (2x, 300+, 95%, 50+):** `<AnimatedCounter>` for each, ~2s duration.
- **KPI labels:** Fade in with slight delay after counter starts.
- **Rationale:** Animated counters are a proven trust-building pattern.

### Process — Medium

- **Section header:** `<ScrollReveal direction="up">`.
- **Step cards:** `<StaggerGroup interval={150} direction="up">` — steps 1→2→3→4 cascade.
- **Rationale:** Stagger naturally tells the process timeline story.

### FinalCTA — Medium

- **CTA card:** `<ScrollReveal direction="scale">` — subtle scale from 0.95→1 + fade.
- **Buttons:** Fade in with slight delay after card.
- **Rationale:** Scale effect differentiates from slide-up sections. CTA feels like it steps forward.

### Footer — Low

- **Entire footer:** Simple `<ScrollReveal>` fade-up, no stagger.
- **Rationale:** Don't compete with the CTA above.

## Performance

- **GPU-only properties:** All animations use `transform` + `opacity`. No layout-triggering properties.
- **will-change:** Applied in pre-animation state, removed after animation completes.
- **No CLS:** Elements occupy full space in DOM flow. Only opacity and transform change.
- **Observer cleanup:** Each observer disconnects after firing (`triggerOnce: true`). Active observers go from ~15 during scroll to 0 once all sections revealed.
- **Bundle size:** ~4.5KB total (unminified) for all 4 new files. Zero new dependencies.

## Accessibility

- **prefers-reduced-motion:** CSS media query sets `transition-duration: 0s` and removes transforms. All content renders immediately in final state.
- **Screen readers:** Content is always in the DOM (uses `opacity: 0`, not `display: none`). Fully accessible from page load.

## CSS Changes

Add to `index.css`:

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    transition-duration: 0s !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
```

## Files Modified

Each section component gets wrapped with `ScrollReveal`/`StaggerGroup`/`AnimatedCounter`:

- `src/components/Hero.jsx` — fade-in headline, AnimatedCounter on stats
- `src/components/PainPoints.jsx` — scroll reveal header, stagger cards
- `src/components/Solution.jsx` — scroll reveal header, stagger step cards
- `src/components/Services.jsx` — scroll reveal header, stagger cards
- `src/components/Results.jsx` — scroll reveal header, stagger testimonials, AnimatedCounter on KPIs
- `src/components/Process.jsx` — scroll reveal header, stagger step cards
- `src/components/FinalCTA.jsx` — scale reveal on CTA card
- `src/components/Footer.jsx` — simple fade-up
- `src/index.css` — prefers-reduced-motion media query
