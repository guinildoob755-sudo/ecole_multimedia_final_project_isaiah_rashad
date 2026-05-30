import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>À propos</h2>
        <p>...</p>
      </motion.div>
    </section>
  )
}