import { motion } from 'framer-motion'
import heroImg from './assets/pochette_album-01.png'

export default function Home() {

  return (
    <section id="home">

      <div className="home-content">

        {/* Partie texte de la page d'accueil */}
        <motion.div
          className="home-text"

          // Animation d'apparition du bloc
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* Titre principal */}
          <h1 className="home-title">
            IT'S BEEN AWFU
            <span className="home-title-accent">
              L
            </span>
          </h1>

          {/* Nom de l'artiste */}
          <h2>Isaiah Rashad</h2>

          {/* Liste des morceaux de l'album */}
          <motion.div
            className="home-tracklist"

            // Animation d'apparition avec un léger délai
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
          >

            <ul className="tracklist">

              {/* Liste des titres de l'album */}
              <li>THE NEW SUBLIME</li>
              <li>M.O.M</li>
              <li>SAME SH!T</li>
              <li>BOY IN RED (feat. SZA)</li>
              <li>SUPAFICIAL</li>
              <li>SCARED 2 LOOK DOWN</li>
              <li>HAPPY HOUR</li>
              <li>DO I LOOK HIGH! (feat. Julian Sintonia)</li>
              <li>AIN'T GIVIN' UP</li>
              <li>GTKY</li>
              <li>CAMERAS (feat. Dominic Fike)</li>
              <li>ACT NORMAL</li>
              <li>10 STATES AWAY</li>
              <li>Nuthin 2 hide</li>
              <li>superpwers</li>
              <li>719 freestyle</li>

            </ul>

          </motion.div>

          {/* Mention des droits d'auteur */}
          <p className="home-sub">
            © 2026 Top Dawg Entertainment
          </p>

        </motion.div>

        {/* Partie image de la page d'accueil */}
        <motion.div
          className="home-img-wrapper"

          // Animation d'apparition de l'image
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
        >

          {/* Effet lumineux derrière l'image */}
          <div className="home-img-glow" />

          {/* Image principale */}
          <img
            src={heroImg}
            alt="Isaiah Rashad"
            className="home-img"
          />

        </motion.div>

      </div>

    </section>
  )
}