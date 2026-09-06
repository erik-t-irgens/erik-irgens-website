import { useEffect, useRef } from 'react'

// Slow-drifting stars joined into faint constellations; the pointer draws a
// few extra lines toward nearby stars. Static under prefers-reduced-motion,
// paused while off-screen. Sits behind the hero content.
export default function Starfield({ rgb = '66, 245, 209' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    const host = canvas.parentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const LINK = 90
    const REACH = 150

    let stars = []
    let w = 0
    let h = 0
    let raf = 0
    let visible = true
    let pointer = null

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        if (!reduce) {
          s.x += s.vx
          s.y += s.vy
          if (s.x < 0) s.x = w
          if (s.x > w) s.x = 0
          if (s.y < 0) s.y = h
          if (s.y > h) s.y = 0
        }
        const tw = reduce ? 1 : 0.6 + 0.4 * Math.sin(t / 900 + s.p)
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.3 + 0.5 * tw})`
        ctx.fill()
        for (let j = i + 1; j < stars.length; j++) {
          const o = stars[j]
          const dx = s.x - o.x
          const dy = s.y - o.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK * LINK) {
            ctx.strokeStyle = `rgba(${rgb}, ${(1 - Math.sqrt(d2) / LINK) * 0.2})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(s.x, s.y)
            ctx.lineTo(o.x, o.y)
            ctx.stroke()
          }
        }
        if (pointer) {
          const dx = s.x - pointer.x
          const dy = s.y - pointer.y
          const d2 = dx * dx + dy * dy
          if (d2 < REACH * REACH) {
            ctx.strokeStyle = `rgba(${rgb}, ${(1 - Math.sqrt(d2) / REACH) * 0.4})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.moveTo(s.x, s.y)
            ctx.lineTo(pointer.x, pointer.y)
            ctx.stroke()
          }
        }
      }
    }

    const loop = (t) => {
      draw(t)
      raf = visible && !reduce ? requestAnimationFrame(loop) : 0
    }
    const start = () => {
      if (!raf) raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
    }

    const resize = () => {
      const rect = host.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = rect.width
      h = rect.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(200, Math.max(60, Math.round((w * h) / 9000)))
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.3 + Math.random() * 1.3,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
        p: Math.random() * Math.PI * 2,
      }))
      draw(performance.now())
    }

    const onMove = (e) => {
      const rect = host.getBoundingClientRect()
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (reduce) draw(performance.now())
    }
    const onLeave = () => {
      pointer = null
      if (reduce) draw(performance.now())
    }

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })

    resize()
    window.addEventListener('resize', resize)
    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    io.observe(host)
    start()

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('resize', resize)
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [rgb])

  return <canvas ref={ref} className="starfield" aria-hidden="true" />
}
