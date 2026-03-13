import { useRef, useEffect } from 'react'

const LERP_SPEED = 0.04

export default function FloatingOrb({
  className = '',
  speed = 20,
  range = 40,
  mouseRadius = 400,
  mouseStrength = 0.18,
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    const section = el.closest('section') || el.parentElement
    if (!section) return

    const phase = Math.random() * Math.PI * 2
    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0
    let mouseNear = false
    let mouseOffsetX = 0
    let mouseOffsetY = 0
    let animId

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      mouseNear = dist < mouseRadius
      if (mouseNear) {
        mouseOffsetX = dx * mouseStrength
        mouseOffsetY = dy * mouseStrength
      }
    }

    const onMouseLeave = () => {
      mouseNear = false
    }

    const tick = () => {
      const t = performance.now() / 1000

      // Autonomous drift with two sine waves at different frequencies
      const autoX = Math.sin((t / speed) * Math.PI * 2 + phase) * range
      const autoY =
        Math.cos((t / speed) * Math.PI * 2 * 0.7 + phase) * range * 0.8

      targetX = mouseNear ? mouseOffsetX : autoX
      targetY = mouseNear ? mouseOffsetY : autoY

      // Smooth lerp toward target
      x += (targetX - x) * LERP_SPEED
      y += (targetY - y) * LERP_SPEED

      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
      animId = requestAnimationFrame(tick)
    }

    section.addEventListener('mousemove', onMouseMove, { passive: true })
    section.addEventListener('mouseleave', onMouseLeave)
    animId = requestAnimationFrame(tick)

    return () => {
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(animId)
    }
  }, [speed, range, mouseRadius, mouseStrength])

  return <div ref={ref} className={className} />
}
