import { useState } from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'

export default function Navbar() {

  // Permet de savoir si le menu mobile est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false)

  // Tableau contenant les liens du menu de navigation
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

      {/* Logo ou nom affiché dans la barre de navigation */}
      <div className="navbar-logo">
        Isaiah Rashad
      </div>

      {/* Liste des liens du menu */}
      <ul
        className={`navbar-links ${
          isOpen ? 'open' : ''
        }`}
      >

        {links.map(({ to, label }) => (

          <li key={to}>

            <Link
              // Identifiant de la section à atteindre
              to={to}

              // Défilement fluide
              smooth

              // Durée de l'animation de scroll
              duration={600}

              // Active automatiquement le lien correspondant
              spy

              // Classe CSS appliquée au lien actif
              activeClass="active"

              // Décalage pour éviter que la navbar masque le contenu
              offset={-80}

              // Ferme le menu mobile après un clic
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>

          </li>

        ))}

      </ul>

      {/* Bouton menu burger pour mobile */}
      <button
        className={`navbar-burger ${
          isOpen ? 'open' : ''
        }`}

        // Ouvre ou ferme le menu
        onClick={() => setIsOpen(!isOpen)}

        // Texte utilisé par les lecteurs d'écran
        aria-label="Menu"
      >

        {/* Les trois lignes du menu burger */}
        <span />
        <span />
        <span />

      </button>

    </nav>
  )
}