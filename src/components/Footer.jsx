export default function Footer() {
  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} erik irgens ·{' '}
      <a href="https://github.com/erik-t-irgens/erik-irgens-website" target="_blank" rel="noopener noreferrer">
        source
      </a>
    </footer>
  )
}
