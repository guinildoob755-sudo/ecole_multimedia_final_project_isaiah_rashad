import { motion } from 'framer-motion'

// Import des images des albums
import sunsTirade from './assets/Album_1.png'
import dawit from './assets/Album_2.png'
import itsBeenAwful from './assets/CD.png'

// Tableau contenant les informations des albums
const albums = [
  {
    id: 2,
    title: "Collector version",
    year: "2016",
    img: sunsTirade
  },
  {
    id: 3,
    title: "Vinyl Album",
    year: "2019",
    img: dawit
  },
  {
    id: 4,
    title: "CD",
    year: "2024",
    img: itsBeenAwful
  },
]

export default function About() {

  return (
    // Section présentant les albums
    <section id="about">

      <div className="about-content">

        {/* Animation d'apparition du titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="about-title">
            ALBUMS
          </h1>

        </motion.div>

        {/* Galerie des albums */}
        <div className="about-gallery">

          {albums.map((album, i) => (

            <motion.div
              key={album.id}
              className="album-card"

              // Animation au moment où la carte apparaît à l'écran
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

              // Ajoute un léger délai entre chaque carte
              transition={{
                duration: 0.6,
                delay: i * 0.1
              }}
            >

              {/* Pochette de l'album */}
              <div className="album-cover">

                {album.img ? (

                  <img
                    src={album.img}
                    alt={album.title}
                  />

                ) : (

                  // Affiché si aucune image n'est disponible
                  <div className="album-placeholder" />

                )}

              </div>

              {/* Nom de l'album */}
              <p className="album-title">
                {album.title}
              </p>

              {/* Année de sortie */}
              <p className="album-year">
                {album.year}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}