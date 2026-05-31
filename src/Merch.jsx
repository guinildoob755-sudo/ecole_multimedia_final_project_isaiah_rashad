import { motion } from 'framer-motion'

import casquette1 from './assets/casquette_1.png'
import casquette2 from './assets/casquette_2.png'
import hoodie1 from './assets/Hoodie_1.png'
import hoodie2 from './assets/hoodie_3.png'
import jacket1 from './assets/Jacket_1.png'
import tishert1 from './assets/Tshirt_1.png'
import tishert2 from './assets/Tshirt_2.png'
import tishert3 from './assets/Tshirt_3.png'

const products = [
  { id: 1, title: "Classic Tee",    price: "35€", category: "T-SHIRT", img: tishert1 },
  { id: 2, title: "Vintage Tee",    price: "35€", category: "T-SHIRT", img: tishert2 },
  { id: 3, title: "Street Tee",     price: "40€", category: "T-SHIRT", img: tishert3 },
  { id: 4, title: "Logo Hoodie",    price: "75€", category: "HOODIE",  img: hoodie1  },
  { id: 5, title: "Zip Hoodie",     price: "80€", category: "HOODIE",  img: hoodie2  },
  { id: 6, title: "Jacket",         price: "95€", category: "JACKET",  img: jacket1  },
  { id: 7, title: "Casquette Vol.1",price: "30€", category: "CASQUETTE", img: casquette1 },
  { id: 8, title: "Casquette Vol.2",price: "30€", category: "CASQUETTE", img: casquette2 },
]

export default function Merch() {
  return (
    <section id="merch">
      <div className="merch-content">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="merch-title">/ MERCH</h1>
        </motion.div>

        <div className="merch-gallery">
          {products.map((item, i) => (
            <motion.div
              key={item.id}
              className="merch-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="merch-img">
                {item.img
                  ? <img src={item.img} alt={item.title} />
                  : <div className="merch-placeholder" />
                }
                <div className="merch-overlay">
                  <button className="merch-btn">Ajouter au panier</button>
                </div>
              </div>
              <div className="merch-info">
                <span className="merch-category">{item.category}</span>
                <span className="merch-price">{item.price}</span>
              </div>
              <p className="merch-name">{item.title}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}