import { motion } from 'framer-motion'

import sunsTirade from './assets/Album_1.png'
import dawit from './assets/Album_2.png'
import itsBeenAwful from './assets/CD.png'


const albums = [
  { id: 2, title: "Collector version", year: "2016", img: sunsTirade },
  { id: 3, title: "Vinyl Album", year: "2019", img: dawit },
  { id: 4, title: "CD", year: "2024", img: itsBeenAwful },
]

export default function About() {
  return (
    <section id="about">
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="about-title">ALBUMS</h1>
        </motion.div>

        <div className="about-gallery">
          {albums.map((album, i) => (
            <motion.div
              key={album.id}
              className="album-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="album-cover">
                {album.img
                  ? <img src={album.img} alt={album.title} />
                  : <div className="album-placeholder" />
                }
              </div>
              <p className="album-title">{album.title}</p>
              <p className="album-year">{album.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}