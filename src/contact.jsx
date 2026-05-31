import { motion } from 'framer-motion'

const platforms = [
  { name: 'YouTube', url: 'https://www.youtube.com/channel/UCDfdBkK0m12ViuT9DvwnZvA', icon: 'https://cdn.simpleicons.org/youtube/white' },
  { name: 'Deezer', url: 'https://deezer.com/artist/isaiah-rashad', icon: 'https://cdn.simpleicons.org/deezer/white' },
  { name: 'Tidal', url: 'https://tidal.com/browse/artist/isaiah-rashad', icon: 'https://cdn.simpleicons.org/tidal/white' },
  { name: 'Spotify', url: 'https://open.spotify.com/artist/isaiah-rashad', icon: 'https://cdn.simpleicons.org/spotify/white' },
  { name: 'Apple Music', url: 'https://music.apple.com/artist/isaiah-rashad', icon: 'https://cdn.simpleicons.org/applemusic/white' },
  
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-content">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        
          <h1 className="contact-title">PLATEFORMES</h1>
        </motion.div>

        <div className="contact-platforms">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <img src={p.icon} alt={p.name} />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}