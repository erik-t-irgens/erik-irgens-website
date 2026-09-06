// Renders an <a> when given an href, otherwise a <button>. Same look either way.
export default function Button({ href, type = 'button', className = 'btn', children, ...rest }) {
  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={className} type={type} {...rest}>
      {children}
    </button>
  )
}
