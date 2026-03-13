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
