# Scroll Animations Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add scroll-triggered reveal animations to the RoJho Media landing page using a zero-dependency component wrapper pattern.

**Architecture:** A `useScrollReveal` hook wraps Intersection Observer and powers three components: `<ScrollReveal>` (directional reveals), `<StaggerGroup>` (auto-delayed children), and `<AnimatedCounter>` (number count-up). Each section component is then updated to use these wrappers.

**Tech Stack:** React 19, Intersection Observer API, CSS transitions, requestAnimationFrame

**Spec:** `docs/superpowers/specs/2026-03-13-scroll-animations-design.md`

---

## File Structure

| File | Responsibility | Action |
|------|---------------|--------|
| `src/hooks/useScrollReveal.js` | Intersection Observer hook | Create |
| `src/components/ScrollReveal.jsx` | Directional reveal wrapper | Create |
| `src/components/StaggerGroup.jsx` | Auto-stagger children | Create |
| `src/components/AnimatedCounter.jsx` | Number count-up on scroll | Create |
| `src/index.css` | prefers-reduced-motion rule | Modify |
| `src/components/Hero.jsx` | Fade-in headline + counter stats | Modify |
| `src/components/PainPoints.jsx` | Reveal header + stagger cards | Modify |
| `src/components/Solution.jsx` | Reveal header + stagger steps | Modify |
| `src/components/Services.jsx` | Reveal header + stagger cards | Modify |
| `src/components/Results.jsx` | Reveal header + stagger testimonials + counters | Modify |
| `src/components/Process.jsx` | Reveal header + stagger steps | Modify |
| `src/components/FinalCTA.jsx` | Scale reveal on CTA | Modify |
| `src/components/Footer.jsx` | Simple fade-up | Modify |

---

## Chunk 1: Core Animation Infrastructure

### Task 1: Create useScrollReveal hook

**Files:**
- Create: `src/hooks/useScrollReveal.js`

- [ ] **Step 1: Create the hooks directory and file**

```js
// src/hooks/useScrollReveal.js
import { useEffect, useRef, useState } from 'react'

export default function useScrollReveal({ threshold = 0.15, triggerOnce = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, triggerOnce])

  return { ref, isVisible }
}
```

- [ ] **Step 2: Verify it compiles**

Run: `pnpm build 2>&1 | tail -3`

Expected: Build succeeds with no errors. (The hook won't be bundled yet since nothing imports it, but this confirms the project still builds.)

- [ ] **Step 3: Commit**

```bash
git add src/hooks/useScrollReveal.js
git commit -m "feat: add useScrollReveal hook with Intersection Observer"
```

---

### Task 2: Create ScrollReveal component

**Files:**
- Create: `src/components/ScrollReveal.jsx`
- Depends on: `src/hooks/useScrollReveal.js`

- [ ] **Step 1: Create the component**

```jsx
// src/components/ScrollReveal.jsx
import { createElement } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const EASING = 'cubic-bezier(0.16, 1, 0.3, 1)'

function getTransform(direction, distance) {
  switch (direction) {
    case 'up':
      return `translateY(${distance}px)`
    case 'left':
      return `translateX(${distance}px)`
    case 'right':
      return `translateX(-${distance}px)`
    case 'scale':
      return 'scale(0.95)'
    case 'none':
      return 'translateY(0)'
    default:
      return `translateY(${distance}px)`
  }
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 600,
  distance = 30,
  className = '',
  as = 'div',
  threshold = 0.15,
  style: styleProp = {},
}) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  const style = {
    ...styleProp,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : getTransform(direction, distance),
    transition: `opacity ${duration}ms ${EASING} ${delay}ms, transform ${duration}ms ${EASING} ${delay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  }

  return createElement(
    as,
    { ref, style, className: `scroll-reveal ${className}`.trim() },
    children
  )
}
```

Note: Uses `createElement` instead of JSX to support the `as` prop cleanly without dynamic JSX tags.

- [ ] **Step 2: Verify it compiles**

Run: `pnpm build 2>&1 | tail -3`

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ScrollReveal.jsx
git commit -m "feat: add ScrollReveal wrapper component"
```

---

### Task 3: Create StaggerGroup component

**Files:**
- Create: `src/components/StaggerGroup.jsx`
- Depends on: `src/components/ScrollReveal.jsx`

- [ ] **Step 1: Create the component**

```jsx
// src/components/StaggerGroup.jsx
import { Children, cloneElement, isValidElement } from 'react'
import ScrollReveal from './ScrollReveal'

export default function StaggerGroup({
  children,
  interval = 150,
  direction = 'up',
  className = '',
  as = 'div',
  threshold = 0.15,
}) {
  const staggeredChildren = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child

    // If child is already a ScrollReveal, inject the delay
    if (child.type === ScrollReveal) {
      return cloneElement(child, {
        delay: (child.props.delay || 0) + index * interval,
        direction: child.props.direction || direction,
      })
    }

    // Otherwise, wrap it in a ScrollReveal
    return (
      <ScrollReveal
        delay={index * interval}
        direction={direction}
        threshold={threshold}
      >
        {child}
      </ScrollReveal>
    )
  })

  const Container = as
  return <Container className={className}>{staggeredChildren}</Container>
}
```

- [ ] **Step 2: Verify it compiles**

Run: `pnpm build 2>&1 | tail -3`

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/StaggerGroup.jsx
git commit -m "feat: add StaggerGroup component for auto-delayed reveals"
```

---

### Task 4: Create AnimatedCounter component

**Files:**
- Create: `src/components/AnimatedCounter.jsx`
- Depends on: `src/hooks/useScrollReveal.js`

- [ ] **Step 1: Create the component**

```jsx
// src/components/AnimatedCounter.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export default function AnimatedCounter({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })
  const [displayValue, setDisplayValue] = useState(0)
  const hasAnimated = useRef(false)

  const animate = useCallback(() => {
    const startTime = performance.now()

    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)
      const currentValue = easedProgress * target

      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [target, duration])

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true
      animate()
    }
  }, [isVisible, animate])

  const formatted = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toString()

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  )
}
```

- [ ] **Step 2: Verify it compiles**

Run: `pnpm build 2>&1 | tail -3`

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/AnimatedCounter.jsx
git commit -m "feat: add AnimatedCounter component with ease-out count-up"
```

---

### Task 5: Add prefers-reduced-motion CSS

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add reduced-motion media query at the end of index.css**

Append after the existing `@layer base { ... }` block:

```css
@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    transition-duration: 0s !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
```

- [ ] **Step 2: Verify it compiles**

Run: `pnpm build 2>&1 | tail -3`

Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add prefers-reduced-motion support for scroll animations"
```

---

## Chunk 2: Apply Animations to Section Components

### Task 6: Animate Hero

**Files:**
- Modify: `src/components/Hero.jsx`

- [ ] **Step 1: Add imports**

At the top of `Hero.jsx`, add:

```js
import ScrollReveal from './ScrollReveal'
import AnimatedCounter from './AnimatedCounter'
```

- [ ] **Step 2: Add staggered fade-in to headline and subtitle**

Inside the left content `<div>` (the one containing the badge, h1, p, and CTA), wrap the badge + h1 in one reveal and the subtitle p + CTA in another:

```jsx
<ScrollReveal direction="none" duration={500}>
  <span className="inline-block px-4 py-1.5 bg-rojho/10 text-rojho-dark text-xs font-semibold uppercase tracking-wider rounded-full">
    Medios Creativos + Estratégicos
  </span>
  <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-charcoal">
    Eleva tu marca con medios creativos{' '}
    <span className="font-display italic text-rojho">estratégicos</span>
  </h1>
</ScrollReveal>
<ScrollReveal direction="none" duration={500} delay={150}>
  <p className="mt-6 text-lg text-charcoal/60 max-w-lg leading-relaxed">
    {/* existing paragraph text unchanged */}
  </p>
  <div className="mt-8 flex flex-wrap items-center gap-4">
    {/* existing CTA buttons unchanged */}
  </div>
</ScrollReveal>
```

This matches the spec: headline fades at 0ms, subtitle + CTA follows at 150ms.

- [ ] **Step 3: Replace static stat values with AnimatedCounter**

Change the stats data array (lines 3-8) to include numeric targets for the counter:

```js
const stats = [
  { target: 50, suffix: '+', label: 'Proyectos Entregados' },
  { target: 200, suffix: '%', label: 'Crecimiento Prom.' },
  { target: 4.9, suffix: '', decimals: 1, label: 'Calificación' },
  { target: 15, suffix: '+', label: 'Expertos Creativos' },
]
```

Then replace the stat rendering (the `<p>` with `{stat.value}` around line 110-111) with:

```jsx
<p className="text-3xl lg:text-4xl font-extrabold text-charcoal">
  <AnimatedCounter
    target={stat.target}
    suffix={stat.suffix}
    decimals={stat.decimals || 0}
    duration={2000}
  />
</p>
```

- [ ] **Step 4: Visual verification**

Open `http://localhost:5173/` in browser. Hero headline should fade in on page load. Stats should count up from 0. Floating cards should still animate as before.

- [ ] **Step 5: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: add fade-in and animated counters to Hero section"
```

---

### Task 7: Animate PainPoints

**Files:**
- Modify: `src/components/PainPoints.jsx`

- [ ] **Step 1: Add imports**

```js
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
```

- [ ] **Step 2: Wrap header in ScrollReveal**

Wrap the `<div className="text-center max-w-2xl mx-auto">` block (lines 28-39) with:

```jsx
<ScrollReveal>
  <div className="text-center max-w-2xl mx-auto">
    {/* existing badge, h2, p unchanged */}
  </div>
</ScrollReveal>
```

- [ ] **Step 3: Replace card grid with StaggerGroup**

Change the card grid container (line 41) from:

```jsx
<div className="mt-14 grid md:grid-cols-3 gap-6">
```

to:

```jsx
<StaggerGroup interval={150} direction="up" as="div" className="mt-14 grid md:grid-cols-3 gap-6">
```

And change the closing `</div>` (line 58) to `</StaggerGroup>`.

- [ ] **Step 4: Visual verification**

Scroll to PainPoints section. Title should slide up first, then 3 cards cascade in with 150ms intervals.

- [ ] **Step 5: Commit**

```bash
git add src/components/PainPoints.jsx
git commit -m "feat: add scroll reveal animations to PainPoints section"
```

---

### Task 8: Animate Solution

**Files:**
- Modify: `src/components/Solution.jsx`

- [ ] **Step 1: Add imports**

```js
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
```

- [ ] **Step 2: Wrap header elements**

Replace the header `<div className="max-w-2xl">` block (lines 31-43) with:

```jsx
<div className="max-w-2xl">
  <ScrollReveal>
    <span className="inline-block px-4 py-1.5 bg-rojho/15 text-rojho-light text-xs font-semibold uppercase tracking-wider rounded-full">
      Nuestro Enfoque
    </span>
    <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold">
      Estrategia y creatividad.{' '}
      <span className="text-rojho">Los resultados llegan solos.</span>
    </h2>
  </ScrollReveal>
  <ScrollReveal delay={150}>
    <p className="mt-4 text-white/60 text-lg">
      No solo hacemos que las cosas se vean bien — construimos sistemas
      de medios que mueven a las personas de la atención a la acción.
    </p>
  </ScrollReveal>
</div>
```

- [ ] **Step 3: Replace card grid with StaggerGroup**

Change the card grid container (line 45) from:

```jsx
<div className="mt-14 grid md:grid-cols-3 gap-6">
```

to:

```jsx
<StaggerGroup interval={200} direction="up" as="div" className="mt-14 grid md:grid-cols-3 gap-6">
```

And change the closing `</div>` (line 65) to `</StaggerGroup>`.

- [ ] **Step 4: Visual verification**

Scroll to the dark Solution section. Title slides up, subtitle follows 150ms later, then 3 step cards cascade with 200ms intervals.

- [ ] **Step 5: Commit**

```bash
git add src/components/Solution.jsx
git commit -m "feat: add scroll reveal animations to Solution section"
```

---

### Task 9: Animate Services

**Files:**
- Modify: `src/components/Services.jsx`

- [ ] **Step 1: Add imports**

```js
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
```

- [ ] **Step 2: Wrap header in ScrollReveal**

Wrap the `<div className="text-center max-w-2xl mx-auto">` block (lines 34-46) with:

```jsx
<ScrollReveal>
  <div className="text-center max-w-2xl mx-auto">
    {/* existing badge, h2, p unchanged */}
  </div>
</ScrollReveal>
```

- [ ] **Step 3: Replace card grid with StaggerGroup**

Change the card grid container (line 48) from:

```jsx
<div className="mt-14 grid sm:grid-cols-2 gap-6">
```

to:

```jsx
<StaggerGroup interval={150} direction="up" as="div" className="mt-14 grid sm:grid-cols-2 gap-6">
```

And change the closing `</div>` (line 68) to `</StaggerGroup>`.

- [ ] **Step 4: Visual verification**

Scroll to Services. Header slides up, then 4 cards cascade with 150ms intervals.

- [ ] **Step 5: Commit**

```bash
git add src/components/Services.jsx
git commit -m "feat: add scroll reveal animations to Services section"
```

---

### Task 10: Animate Results

**Files:**
- Modify: `src/components/Results.jsx`

- [ ] **Step 1: Add imports**

```js
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
import AnimatedCounter from './AnimatedCounter'
```

- [ ] **Step 2: Wrap header in ScrollReveal**

Wrap the `<div className="text-center max-w-2xl mx-auto">` block (lines 38-48) with:

```jsx
<ScrollReveal>
  <div className="text-center max-w-2xl mx-auto">
    {/* existing badge, h2, p unchanged */}
  </div>
</ScrollReveal>
```

- [ ] **Step 3: Replace testimonial grid with StaggerGroup**

Change the testimonial grid container (line 51) from:

```jsx
<div className="mt-14 grid md:grid-cols-3 gap-6">
```

to:

```jsx
<StaggerGroup interval={200} direction="up" as="div" className="mt-14 grid md:grid-cols-3 gap-6">
```

And change the closing `</div>` (line 70) to `</StaggerGroup>`.

- [ ] **Step 4: Update KPI data and rendering with AnimatedCounter**

Change the kpis data array (lines 27-32) to include numeric targets:

```js
const kpis = [
  { target: 2, suffix: 'x', label: 'Aumento Prom. en Conversión' },
  { target: 300, suffix: '+', label: 'Piezas de Contenido' },
  { target: 95, suffix: '%', label: 'Retención de Clientes' },
  { target: 50, suffix: '+', label: 'Marcas Transformadas' },
]
```

Replace the entire KPI block (`<div className="mt-14 rounded-2xl border border-white/10 bg-dark-card p-8">` through its closing `</div>`, including the inner grid) with:

```jsx
<ScrollReveal>
  <div className="mt-14 rounded-2xl border border-white/10 bg-dark-card p-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {kpis.map((kpi, i) => (
        <div key={i} className="text-center">
          <p className="text-3xl lg:text-4xl font-extrabold text-rojho">
            <AnimatedCounter
              target={kpi.target}
              suffix={kpi.suffix}
              duration={2000}
            />
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/40">
            {kpi.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</ScrollReveal>
```

- [ ] **Step 5: Visual verification**

Scroll to Results. Header slides up, testimonial cards cascade with 200ms intervals, KPI numbers count up from 0.

- [ ] **Step 6: Commit**

```bash
git add src/components/Results.jsx
git commit -m "feat: add scroll reveal and animated counters to Results section"
```

---

### Task 11: Animate Process

**Files:**
- Modify: `src/components/Process.jsx`

- [ ] **Step 1: Add imports**

```js
import ScrollReveal from './ScrollReveal'
import StaggerGroup from './StaggerGroup'
```

- [ ] **Step 2: Wrap header in ScrollReveal**

Wrap the `<div className="text-center max-w-2xl mx-auto">` block (lines 38-50) with:

```jsx
<ScrollReveal>
  <div className="text-center max-w-2xl mx-auto">
    {/* existing badge, h2, p unchanged */}
  </div>
</ScrollReveal>
```

- [ ] **Step 3: Replace step grid with StaggerGroup**

Change the step grid container (line 52) from:

```jsx
<div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

to:

```jsx
<StaggerGroup interval={150} direction="up" as="div" className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
```

And change the closing `</div>` (line 70) to `</StaggerGroup>`.

- [ ] **Step 4: Visual verification**

Scroll to Process. Header slides up, then 4 step cards cascade left-to-right with 150ms intervals.

- [ ] **Step 5: Commit**

```bash
git add src/components/Process.jsx
git commit -m "feat: add scroll reveal animations to Process section"
```

---

### Task 12: Animate FinalCTA

**Files:**
- Modify: `src/components/FinalCTA.jsx`

- [ ] **Step 1: Add import**

```js
import ScrollReveal from './ScrollReveal'
```

- [ ] **Step 2: Wrap the CTA card in a scale ScrollReveal and add delayed buttons**

Wrap the `<div className="relative rounded-3xl bg-charcoal overflow-hidden ...">` block (line 7) with a scale reveal. Then wrap the button container `<div className="mt-8 flex flex-wrap justify-center gap-4">` (line 22) with a separate delayed fade-in:

```jsx
<ScrollReveal direction="scale" duration={700}>
  <div className="relative rounded-3xl bg-charcoal overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center">
    {/* Decorative gradients unchanged */}
    <div className="relative z-10 max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
        {/* heading content unchanged */}
      </h2>
      <p className="mt-5 text-white/60 text-lg max-w-lg mx-auto">
        {/* paragraph content unchanged */}
      </p>
      <ScrollReveal direction="none" delay={400} duration={500}>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* both CTA buttons unchanged */}
        </div>
      </ScrollReveal>
    </div>
  </div>
</ScrollReveal>
```

The outer `ScrollReveal direction="scale"` handles the card entrance. The inner `ScrollReveal direction="none" delay={400}` fades in the buttons 400ms after the card appears.

- [ ] **Step 3: Visual verification**

Scroll to FinalCTA. The dark CTA card should scale up from 0.95 to 1.0 with a fade-in, then buttons fade in 400ms later.

- [ ] **Step 4: Commit**

```bash
git add src/components/FinalCTA.jsx
git commit -m "feat: add scale scroll reveal to FinalCTA section"
```

---

### Task 13: Animate Footer

**Files:**
- Modify: `src/components/Footer.jsx`

- [ ] **Step 1: Add import**

```js
import ScrollReveal from './ScrollReveal'
```

- [ ] **Step 2: Wrap footer content in ScrollReveal**

Inside the `<footer>` tag, wrap the `<div className="max-w-7xl mx-auto px-6">` (line 19) with:

```jsx
<ScrollReveal>
  <div className="max-w-7xl mx-auto px-6">
    {/* all existing content unchanged */}
  </div>
</ScrollReveal>
```

- [ ] **Step 3: Visual verification**

Scroll to Footer. Content should gently fade-up as a single unit.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: add simple scroll reveal to Footer"
```

---

### Task 14: Full page visual QA

- [ ] **Step 1: Full page scroll test**

Open `http://localhost:5173/` and scroll through the entire page top to bottom. Verify:

1. Hero: headline fades in, stats count up, floating cards still animate
2. PainPoints: header slides up, 3 cards stagger in
3. Solution: header + subtitle stagger, 3 step cards cascade slower
4. Services: header slides up, 4 cards stagger in
5. Results: header slides up, testimonials cascade, KPI numbers count up
6. Process: header slides up, 4 steps cascade
7. FinalCTA: card scales up from 0.95
8. Footer: simple fade-up

- [ ] **Step 2: Verify no CLS**

Check that no content shifts position during scroll animations. Elements should only change opacity and transform.

- [ ] **Step 3: Verify hover interactions still work**

Card hover effects (shadow, border color, icon bg) should still work correctly alongside scroll animations.

- [ ] **Step 4: Production build check**

Run: `pnpm build`

Expected: Build succeeds with no errors.

- [ ] **Step 5: Final commit if any fixes needed**

Stage only the specific files that were fixed, then commit:

```bash
git add src/components/ src/hooks/ src/index.css
git commit -m "fix: address visual QA issues from scroll animation review"
```

(Skip this step if no fixes are needed.)
