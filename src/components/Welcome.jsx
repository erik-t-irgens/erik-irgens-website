import Section from './Section.jsx'
import Button from './Button.jsx'
import Starfield from './Starfield.jsx'
import { profile } from '../data/profile.js'
import avatar from '../assets/avatar.webp'
import bgLarge from '../assets/bg-welcome.webp'
import bgSmall from '../assets/bg-welcome-960.webp'

export default function Welcome() {
  return (
    <Section
      id="welcome"
      accent="var(--teal)"
      bgLarge={bgLarge}
      bgSmall={bgSmall}
      className="section--hero"
      decor={<Starfield />}
    >
      <div className="hero">
        <div className="hero__card">
          <img className="hero__avatar" src={avatar} alt="Erik Irgens" width="390" height="480" fetchPriority="high" />
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">
            {profile.role}
            <br />
            <a href={profile.orgUrl} target="_blank" rel="noopener noreferrer">{profile.org}</a>
          </p>
        </div>

        <div className="hero__text">
          <p className="hero__statement">
            {profile.statement.map((line, i) => (
              <span key={i} className="hero__line">{line}</span>
            ))}
          </p>
          <dl className="now">
            {profile.now.map((n) => (
              <div key={n.label}>
                <dt>{n.label}</dt>
                <dd>{n.text}</dd>
              </div>
            ))}
          </dl>
          <div className="hero__actions">
            <Button href="#portfolio">See my work</Button>
            <Button href="#contact" className="btn btn--ghost">Get in touch</Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
