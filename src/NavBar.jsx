import { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: 'home', label: 'Accueil' },
    { to: 'presentation', label: 'Présentation' },
    { to: 'about', label: 'Albums' },
    { to: 'concert', label: 'Concert' },
    { to: 'merch', label: 'Merch' },
    { to: 'contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-logo">Isaiah Rashad</div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              smooth
              duration={600}
              spy
              activeClass="active"
              offset={-80}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className={`navbar-burger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}