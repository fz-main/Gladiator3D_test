import { createContext, useContext, useEffect, useState } from 'react'

const ScrollContext = createContext({ progress: 0 })

export function ScrollProvider({ children, lenis }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!lenis.current) return
    const update = ({ scroll, limit }) => {
      setProgress(scroll / (limit - window.innerHeight) || 0)
    }
    lenis.current.on('scroll', update)
    return () => lenis.current.off('scroll', update)
  }, [lenis])

  return (
    <ScrollContext.Provider value={progress}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScrollProgress = () => useContext(ScrollContext)
