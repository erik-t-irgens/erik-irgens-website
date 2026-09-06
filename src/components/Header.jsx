import { useActiveSection } from '../hooks/useActiveSection.js'

const links = [
  { id: 'welcome', label: 'Top', accent: 'var(--teal)' },
  { id: 'about', label: 'About', accent: 'var(--amber)' },
  { id: 'portfolio', label: 'Portfolio', accent: 'var(--red)' },
  { id: 'contact', label: 'Contact', accent: 'var(--green)' },
]
const ids = links.map((l) => l.id)

export default function Header() {
  const active = useActiveSection(ids)
  return (
    <header className="site-header">
      <nav aria-label="Sections">
        <ul>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                style={{ '--accent': l.accent }}
                className={active === l.id ? 'is-current' : undefined}
                aria-current={active === l.id ? 'location' : undefined}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
