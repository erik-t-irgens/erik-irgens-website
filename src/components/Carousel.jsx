import { useRef } from 'react'

// Horizontal, scroll-snapping list. Swipe or scroll natively; the buttons and
// the arrow keys (when the track is focused) nudge one card at a time.
export default function Carousel({ label, children }) {
  const track = useRef(null)

  const step = (dir) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('.card')
    const gap = 16
    const distance = card ? card.getBoundingClientRect().width + gap : el.clientWidth
    el.scrollBy({ left: dir * distance, behavior: 'smooth' })
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1) }
  }

  return (
    <div className="carousel">
      <button type="button" className="carousel__btn carousel__btn--prev" aria-label="Previous" onClick={() => step(-1)}>
        ‹
      </button>
      <div className="carousel__track" ref={track} role="region" aria-label={label} tabIndex={0} onKeyDown={onKeyDown}>
        {children}
      </div>
      <button type="button" className="carousel__btn carousel__btn--next" aria-label="Next" onClick={() => step(1)}>
        ›
      </button>
    </div>
  )
}
