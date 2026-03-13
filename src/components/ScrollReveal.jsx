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
