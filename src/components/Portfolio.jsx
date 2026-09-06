import { useState } from 'react'
import Section from './Section.jsx'
import Button from './Button.jsx'
import Tabs from './Tabs.jsx'
import Carousel from './Carousel.jsx'
import { useGitHubRepo } from '../hooks/useGitHubRepo.js'
import { featured, more, githubProfile, languageColor } from '../data/projects.js'
import { pieces, embedUrl } from '../data/music.js'
import githubIcon from '../assets/icons/github.svg'
import soundcloudIcon from '../assets/icons/soundcloud.svg'
import bgLarge from '../assets/bg-portfolio.webp'
import bgSmall from '../assets/bg-portfolio-960.webp'

const tabs = [
  { id: 'software', label: 'Software' },
  { id: 'music', label: 'Music' },
]

function LanguageBar({ languages, live }) {
  if (!languages || languages.length === 0) return null
  const total = languages.reduce((sum, [, n]) => sum + n, 0) || 1
  return (
    <>
      {live && (
        <div className="lang-bar" aria-hidden="true">
          {languages.map(([name, n], i) => (
            <span key={name} style={{ width: `${(100 * n) / total}%`, background: languageColor(name, i) }} />
          ))}
        </div>
      )}
      <ul className="lang-list" aria-label="Languages">
        {languages.map(([name, n], i) => (
          <li key={name} style={{ color: languageColor(name, i) }}>
            {name}
            {live ? `, ${Math.round((100 * n) / total)}%` : ''}
          </li>
        ))}
      </ul>
    </>
  )
}

function formatDate(iso) {
  if (!iso) return null
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function ProjectCard({ project }) {
  const repo = useGitHubRepo(project.name, project)
  const updated = formatDate(repo.pushedAt)
  return (
    <article className="card">
      <h3 className="card__title">{repo.name}</h3>
      <LanguageBar languages={repo.languages} live={repo.live} />
      {updated && <p className="card__meta">Last updated {updated}</p>}
      <p className="card__desc">{repo.description}</p>
      <div className="card__links">
        <a className="icon-link" href={repo.url} target="_blank" rel="noopener noreferrer" aria-label={`${repo.name} on GitHub`}>
          <img src={githubIcon} alt="" />
        </a>
      </div>
    </article>
  )
}

function FeatureCard({ project }) {
  const repo = useGitHubRepo(project.name, project)
  return (
    <article className="feature" style={{ '--tint': project.tint }}>
      <div className="feature__cover" aria-hidden="true">
        {project.image ? <img src={project.image} alt="" loading="lazy" /> : <span className="feature__glyph">{project.glyph}</span>}
      </div>
      <div className="feature__body">
        <p className="eyebrow">{project.kind}</p>
        <h3 className="feature__title">{project.title}</h3>
        <p className="feature__blurb">{repo.description}</p>
        <LanguageBar languages={repo.languages} live={repo.live} />
        <div className="feature__links">
          {project.liveUrl && (
            <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              visit
            </a>
          )}
          <a className="icon-link" href={repo.url} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>
            <img src={githubIcon} alt="" />
          </a>
        </div>
      </div>
    </article>
  )
}

function MusicCard({ piece }) {
  return (
    <article className="card">
      <h3 className="card__title">{piece.title}</h3>
      <iframe className="sc-embed" title={`${piece.title} on SoundCloud`} src={embedUrl(piece.resource)} loading="lazy" allow="autoplay" />
      <div className="card__body">
        <p>{piece.description}</p>
      </div>
      <div className="card__links">
        <a className="icon-link" href={piece.link} target="_blank" rel="noopener noreferrer" aria-label={`${piece.title} on SoundCloud`}>
          <img src={soundcloudIcon} alt="" />
        </a>
      </div>
    </article>
  )
}

export default function Portfolio() {
  const [tab, setTab] = useState('software')
  return (
    <Section id="portfolio" title="Portfolio" accent="var(--red)" bgLarge={bgLarge} bgSmall={bgSmall}>
      <Tabs tabs={tabs} value={tab} onChange={setTab} label="Portfolio" />

      {tab === 'software' && (
        <div className="panel" role="tabpanel" id="panel-software" aria-labelledby="tab-software">
          <div className="featured">
            {featured.map((p) => (
              <FeatureCard project={p} key={p.name} />
            ))}
          </div>
          <p className="subhead">
            more on{' '}
            <a className="text-link" href={githubProfile} target="_blank" rel="noopener noreferrer">
              github
            </a>
          </p>
          <Carousel label="More projects">
            {more.map((p) => (
              <ProjectCard project={p} key={p.name} />
            ))}
          </Carousel>
        </div>
      )}

      {tab === 'music' && (
        <div className="panel" role="tabpanel" id="panel-music" aria-labelledby="tab-music">
          <Carousel label="Music">
            {pieces.map((p) => (
              <MusicCard piece={p} key={p.title} />
            ))}
          </Carousel>
        </div>
      )}

      <Button href="#contact">Contact Me</Button>
    </Section>
  )
}
