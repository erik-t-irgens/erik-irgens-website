// Renders an <a> when given an href, otherwise a <button>. Same look either way.
export default function Button({ href, type = 'button', children, ...rest }) {
  if (href) {
    return (
      <a className="btn" href={href} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className="btn" type={type} {...rest}>
      {children}
    </button>
  )
}
