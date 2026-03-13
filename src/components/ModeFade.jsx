import { useRef, useEffect, useState } from 'react'
import { useMode } from '../ModeContext'

export default function ModeFade({ children, className = '' }) {
  const { mode } = useMode()
  const [visible, setVisible] = useState(true)
  const [currentMode, setCurrentMode] = useState(mode)
  const timeoutRef = useRef(null)

  useEffect(() => {
    if (mode === currentMode) return

    // Fade out
    setVisible(false)

    timeoutRef.current = setTimeout(() => {
      setCurrentMode(mode)
      // Fade in
      setVisible(true)
    }, 300)

    return () => clearTimeout(timeoutRef.current)
  }, [mode, currentMode])

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(8px)',
        transition: 'opacity 300ms ease, transform 300ms ease',
      }}
    >
      {children}
    </div>
  )
}
