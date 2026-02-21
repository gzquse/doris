import { useState } from 'react'
import './Nav.css'

const links = [
  { id: 'love-letter', label: 'Letter' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'chemistry', label: 'Formula' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'interactive', label: 'For You' },
]

export default function Nav({ onScrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (id) => {
    onScrollToSection?.(id)
    setMenuOpen(false)
  }

  return (
    <nav className="nav" role="navigation" aria-label="Main">
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <ul id="nav-menu" className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <button
              className="nav-link"
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
