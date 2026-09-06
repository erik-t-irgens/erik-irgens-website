import { useEffect, useState } from 'react'

// Tracks which of the given section ids currently occupies the middle of the
// viewport, for highlighting the matching nav link.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      // a thin band across the vertical middle of the viewport
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  return active
}
