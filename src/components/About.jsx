import { useState } from 'react'
import Section from './Section.jsx'
import Button from './Button.jsx'
import Tabs from './Tabs.jsx'
import Carousel from './Carousel.jsx'
import { skillGroups } from '../data/skills.js'
import { profile } from '../data/profile.js'
import { testimonials } from '../data/testimonials.js'
import linkedinIcon from '../assets/icons/linkedin.svg'
import bgLarge from '../assets/bg-about.webp'
import bgSmall from '../assets/bg-about-960.webp'

const tabs = [
  { id: 'skills', label: 'Skills' },
  { id: 'testimonials', label: 'Testimonials' },
]

function initials(name) {
  return name
    .replace(/\(.*?\)/g, '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('')
}

function TestimonialCard({ t }) {
  return (
    <article className="card">
      {t.photo ? (
        <img className="avatar-initials" src={t.photo} alt="" />
      ) : (
        <div className="avatar-initials" aria-hidden="true">{initials(t.name)}</div>
      )}
      <h3 className="card__title">{t.name}</h3>
      <p className="card__sub">{t.relationship}</p>
      <div className="card__body">
        {t.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="card__links">
        <a className="icon-link" href={t.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${t.name} on LinkedIn`}>
          <img src={linkedinIcon} alt="" />
        </a>
      </div>
    </article>
  )
}

export default function About() {
  const [tab, setTab] = useState('skills')
  return (
    <Section id="about" title="About" accent="var(--amber)" bgLarge={bgLarge} bgSmall={bgSmall}>
      <div className="bio">
        {profile.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Tabs tabs={tabs} value={tab} onChange={setTab} label="About me" />

      {tab === 'skills' && (
        <div className="panel skills" role="tabpanel" id="panel-skills" aria-labelledby="tab-skills">
          {skillGroups.map((g) => (
            <div className="skill-group" key={g.title}>
              <h3>{g.title}</h3>
              <ul className="pills">
                {g.items.map((s) => (
                  <li className="pill" key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {tab === 'testimonials' && (
        <div className="panel" role="tabpanel" id="panel-testimonials" aria-labelledby="tab-testimonials">
          <Carousel label="Testimonials">
            {testimonials.map((t) => (
              <TestimonialCard t={t} key={t.name} />
            ))}
          </Carousel>
        </div>
      )}

      <Button href="#portfolio">See my Portfolio</Button>
    </Section>
  )
}
