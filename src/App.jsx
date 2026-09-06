import Header from './components/Header.jsx'
import Welcome from './components/Welcome.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Welcome />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
