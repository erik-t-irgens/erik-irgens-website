import { useReveal } from '../hooks/useReveal.js'

// Full-height page section with a dimming background photo, an accent frame
// that draws itself in, and content that fades up the first time the section
// scrolls into view.
export default function Section({ id, title, accent, bgLarge, bgSmall, children }) {
  const [ref, active] = useReveal()
  const style = {
    '--accent': accent,
    '--bg-lg': `url(${bgLarge})`,
    '--bg-sm': `url(${bgSmall})`,
  }
  return (
    <section id={id} ref={ref} className={`section${active ? ' is-active' : ''}`} style={style}>
      <div className="section__bg" aria-hidden="true" />
      <div className="section__frame" aria-hidden="true" />
      <div className="section__inner">
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  )
}
