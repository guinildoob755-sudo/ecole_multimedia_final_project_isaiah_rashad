import { motion } from 'framer-motion'

// Import des images des produits de la boutique
import casquette1 from './assets/casquette_1.png'
import casquette2 from './assets/casquette_2.png'
import hoodie1 from './assets/Hoodie_1.png'
import hoodie2 from './assets/hoodie_3.png'
import jacket1 from './assets/Jacket_1.png'
import tishert1 from './assets/Tshirt_1.png'
import tishert2 from './assets/Tshirt_2.png'
import tishert3 from './assets/Tshirt_3.png'

// Tableau contenant les informations des produits
const products = [
  {
    id: 1,
    title: "Classic Tee",
    price: "35€",
    category: "T-SHIRT",
    img: tishert1
  },
  {
    id: 2,
    title: "Vintage Tee",
    price: "35€",
    category: "T-SHIRT",
    img: tishert2
  },
  {
    id: 3,
    title: "Street Tee",
    price: "40€",
    category: "T-SHIRT",
    img: tishert3
  },
  {
    id: 4,
    title: "Logo Hoodie",
    price: "75€",
    category: "HOODIE",
    img: hoodie1
  },
  {
    id: 5,
    title: "Zip Hoodie",
    price: "80€",
    category: "HOODIE",
    img: hoodie2
  },
  {
    id: 6,
    title: "Jacket",
    price: "95€",
    category: "JACKET",
    img: jacket1
  },
  {
    id: 7,
    title: "Casquette Vol.1",
    price: "30€",
    category: "CASQUETTE",
    img: casquette1
  },
  {
    id: 8,
    title: "Casquette Vol.2",
    price: "30€",
    category: "CASQUETTE",
    img: casquette2
  },
]

export default function Merch() {

  return (
    <section id="merch">

      <div className="merch-content">

        {/* Animation d'apparition du titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="merch-title">
            MERCH
          </h1>

        </motion.div>

        {/* Galerie des produits */}
        <div className="merch-gallery">

          {products.map((item, i) => (

            <motion.div
              key={item.id}
              className="merch-card"

              // Animation d'apparition des cartes produits
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08
              }}
            >

              {/* Image du produit */}
              <div className="merch-img">

                {item.img ? (

                  <img
                    src={item.img}
                    alt={item.title}
                  />

                ) : (

                  // Affiché si aucune image n'est disponible
                  <div className="merch-placeholder" />

                )}

                {/* Overlay affiché au survol */}
                <div className="merch-overlay">

                  {/* Bouton d'ajout au panier */}
                  <button className="merch-btn">
                    Ajouter au panier
                  </button>

                </div>

              </div>

              {/* Informations du produit */}
              <div className="merch-info">

                {/* Catégorie */}
                <span className="merch-category">
                  {item.category}
                </span>

                {/* Prix */}
                <span className="merch-price">
                  {item.price}
                </span>

              </div>

              {/* Nom du produit */}
              <p className="merch-name">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}