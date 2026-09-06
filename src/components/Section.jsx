import { useReveal } from '../hooks/useReveal.js'

// Full-height page section with a dimming background photo, an accent frame
// that draws itself in, and content that fades up the first time the section
// scrolls into view. `decor` renders between the photo and the content.
export default function Section({ id, title, accent, bgLarge, bgSmall, decor, className, children }) {
  const [ref, active] = useReveal()
  const style = {
    '--accent': accent,
    '--bg-lg': `url(${bgLarge})`,
    '--bg-sm': `url(${bgSmall})`,
  }
  const classes = ['section', active && 'is-active', className].filter(Boolean).join(' ')
  return (
    <section id={id} ref={ref} className={classes} style={style}>
      <div className="section__bg" aria-hidden="true" />
      {decor}
      <div className="section__frame" aria-hidden="true" />
      <div className="section__inner">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  )
}
