import { motion } from 'framer-motion'

import img1 from './assets/image_1.png'
import img2 from './assets/image_2.png'
import img3 from './assets/image_3.png'
import img4 from './assets/image_4.png'

export default function Presentation() {
  const images = [img1, img2, img3, img4]

  return (
    <motion.section
      id="presentation"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="presentation-content">

        <h1 className="presentation-title">
          Présentation
        </h1>

        <div className="presentation-grid">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="presentation-item"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={img} alt={`presentation-${index}`} />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}