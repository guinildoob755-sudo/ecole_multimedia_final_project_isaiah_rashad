import { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { to: 'home',    label: 'Accueil' },
    { to: 'about',   label: 'À propos' },
    { to: 'concert', label: 'Concert' },
    { to: 'music',   label: 'Musique' },
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
              smooth={true}
              duration={600}
              spy={true}
              activeClass="active"
              offset={-80}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

       <button className='admin' >
      admin
    </button>

      <button
        className={`navbar-burger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}