import { useEffect, useRef, useState } from 'react'

// Marks an element "active" the first time a meaningful part of it scrolls into
// view. Once active it stays active. Falls back to always-active when
// IntersectionObserver is unavailable.
export function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    if (typeof IntersectionObserver === 'undefined') {
      setActive(true)
      return undefined
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, active]
}
