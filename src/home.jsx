import { motion } from 'framer-motion'
import heroImg from './assets/hero.png'
import firebase from 'firebase/compat/app'

export default function Home() {
  return (
    <section id="home">
      <div className="home-content">

        <motion.div
          className="home-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="home-title">
            IT'S BEEN AWFU<span className="home-title-accent">L</span>
          </h1>
          <h2>Isaiah Rashad</h2>

          <motion.div
            className="home-tracklist"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ul className="tracklist">
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

          <p className="home-sub">Musique sans frontières.</p>
        </motion.div>

        <motion.div
          className="home-img-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="home-img-glow" />
          <img src={heroImg} alt="Isaiah Rashad" className="home-img" />
        </motion.div>

      </div>
    </section>
  )
}