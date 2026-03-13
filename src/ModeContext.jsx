import { createContext, useContext, useState, useEffect } from 'react'

const ModeContext = createContext()

export const MODES = {
  GROWTH: 'growth',
  AUTOMATION: 'automation',
}

export function ModeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (window.location.hash === '#automation') return MODES.AUTOMATION
    return MODES.GROWTH
  })

  useEffect(() => {
    const hash = mode === MODES.AUTOMATION ? '#automation' : ''
    if (window.location.hash !== hash) {
      window.history.replaceState(null, '', hash || window.location.pathname)
    }
  }, [mode])

  const toggle = () =>
    setMode((m) => (m === MODES.GROWTH ? MODES.AUTOMATION : MODES.GROWTH))

  return (
    <ModeContext.Provider value={{ mode, setMode, toggle }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const ctx = useContext(ModeContext)
  if (!ctx) throw new Error('useMode must be used within ModeProvider')
  return ctx
}
