import { useState } from 'react'
import Section from './Section.jsx'
import Button from './Button.jsx'
import facebookIcon from '../assets/icons/facebook.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'
import bgLarge from '../assets/bg-contact.webp'
import bgSmall from '../assets/bg-contact-960.webp'

// Submissions land in a Google Form. The browser cannot read Google's
// response cross-origin, so the request is sent in no-cors mode and treated
// as delivered once it completes.
const FORM_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeo5vFwawcKfF4dVE9cvw3tyliqurm_ZvA8jaLjTvkdCO79Hg/formResponse'
const FIELDS = {
  email: 'entry.653361450',
  name: 'entry.1876410479',
  subject: 'entry.1071617651',
  body: 'entry.246720857',
}

const socials = [
  { href: 'https://www.linkedin.com/in/erik-t-irgens/', label: 'LinkedIn', icon: linkedinIcon },
  { href: 'https://www.github.com/erik-t-irgens/', label: 'GitHub', icon: githubIcon },
  { href: 'https://www.instagram.com/erik_irgens/', label: 'Instagram', icon: instagramIcon },
  { href: 'https://www.facebook.com/erik.irgens', label: 'Facebook', icon: facebookIcon },
]

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      await fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: new FormData(form) })
      form.reset()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const busy = status === 'sending'
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name={FIELDS.email} type="email" autoComplete="email" placeholder="you@example.com" required disabled={busy} />
      </div>
      <div className="field">
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name={FIELDS.name} type="text" autoComplete="name" placeholder="Name" required disabled={busy} />
      </div>
      <div className="field">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name={FIELDS.subject} type="text" placeholder="Subject" required disabled={busy} />
      </div>
      <div className="field">
        <label htmlFor="contact-body">Message</label>
        <textarea id="contact-body" name={FIELDS.body} rows="5" placeholder="What's on your mind?" required disabled={busy} />
      </div>
      <div className="form-actions">
        <Button type="submit" disabled={busy}>{busy ? 'Sending…' : 'Submit'}</Button>
        <p className="form-status" role="status" aria-live="polite">
          {status === 'done' && 'Your message has been received. Thank you!'}
          {status === 'error' && 'Something went wrong. Please email me directly instead.'}
        </p>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <Section id="contact" title="Contact" accent="var(--green)" bgLarge={bgLarge} bgSmall={bgSmall}>
      <p className="contact-statement">
        I&apos;d <span className="accent">love</span> to hear from <span className="accent">you</span>.
      </p>
      <ContactForm />
      <ul className="socials" aria-label="Social links" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {socials.map((s) => (
          <li key={s.label}>
            <a className="icon-link" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <img src={s.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
