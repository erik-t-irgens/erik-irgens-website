import Section from './Section.jsx'
import Button from './Button.jsx'
import avatar from '../assets/avatar.webp'
import bgLarge from '../assets/bg-welcome.webp'
import bgSmall from '../assets/bg-welcome-960.webp'

export default function Welcome() {
  return (
    <Section id="welcome" title="Welcome" accent="var(--teal)" bgLarge={bgLarge} bgSmall={bgSmall}>
      <div className="hero">
        <img className="hero__avatar" src={avatar} alt="Erik Irgens" width="390" height="480" fetchPriority="high" />
        <h1 className="hero__name">erik irgens</h1>
        <p className="hero__role">director of teaching and curriculum at epicodus</p>
      </div>
      <p className="hero__statement">
        Hi. i&apos;m <span className="accent">erik irgens</span>.
        <br />
        i&apos;m a software engineer, and composer.
      </p>
      <Button href="#about">Learn More</Button>
    </Section>
  )
}
