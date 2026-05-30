import { Link } from 'react-scroll'
import './NavBar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Isaiah Rashad</div>

      <ul className="navbar-links">
        <li>
          <Link to="home" smooth={true} duration={600} spy={true} activeClass="active" offset={-80}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={600} spy={true} activeClass="active" offset={-80}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="music" smooth={true} duration={600} spy={true} activeClass="active" offset={-80}>
            Musique
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={600} spy={true} activeClass="active" offset={-80}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}