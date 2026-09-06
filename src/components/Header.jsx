const links = [
  { href: '#welcome', label: 'Top', accent: 'var(--teal)' },
  { href: '#about', label: 'About', accent: 'var(--amber)' },
  { href: '#portfolio', label: 'Portfolio', accent: 'var(--red)' },
  { href: '#contact', label: 'Contact', accent: 'var(--green)' },
]

export default function Header() {
  return (
    <header className="site-header">
      <nav aria-label="Sections">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} style={{ '--accent': l.accent }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
