import { motion } from 'framer-motion'

// Tableau contenant les différentes plateformes de streaming
// et réseaux sociaux de l'artiste
const platforms = [
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCDfdBkK0m12ViuT9DvwnZvA',
    icon: 'https://cdn.simpleicons.org/youtube/white'
  },
  {
    name: 'Deezer',
    url: 'https://www.deezer.com/fr/artist/5515551',
    icon: 'https://cdn.simpleicons.org/deezer/white'
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/artist/4953055',
    icon: 'https://cdn.simpleicons.org/tidal/white'
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/intl-fr/artist/6aaMZ3fcfLv4tEbmY7bjRM',
    icon: 'https://cdn.simpleicons.org/spotify/white'
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/isaiah-rashad/605391263',
    icon: 'https://cdn.simpleicons.org/applemusic/white'
  },
  {
    name: 'x',
    url: 'https://x.com/isaiahrashad',
    icon: 'https://cdn.simpleicons.org/x/white'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/isaiahrashad/',
    icon: 'https://cdn.simpleicons.org/instagram/white'
  },
]

export default function Contact() {

  return (
    <section id="contact">

      <div className="contact-content">

        {/* Animation d'apparition du titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="contact-title">
            PLATEFORMES
          </h1>

        </motion.div>

        {/* Liste des plateformes */}
        <div className="contact-platforms">

          {platforms.map((p, i) => (

            <motion.a
              key={p.name}

              // Lien vers la plateforme
              href={p.url}

              // Ouverture dans un nouvel onglet
              target="_blank"

              // Sécurité pour les liens externes
              rel="noopener noreferrer"

              className="platform-btn"

              // Animation d'apparition
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}

              // Petit délai entre chaque icône
              transition={{
                duration: 0.4,
                delay: i * 0.08
              }}
            >

              {/* Icône de la plateforme */}
              <img
                src={p.icon}
                alt={p.name}
              />

            </motion.a>

          ))}

        </div>

      </div>

    </section>
  )
}