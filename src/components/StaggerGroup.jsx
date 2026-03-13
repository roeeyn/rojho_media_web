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
