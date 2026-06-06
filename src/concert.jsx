import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "./firebase"

export default function Concert() {

  // Contient la liste des concerts récupérés depuis Firestore
  const [concerts, setConcerts] = useState([])

  // Permet d'afficher un message pendant le chargement
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    // Fonction qui récupère les concerts dans Firestore
    const fetchConcerts = async () => {

      // Requête triée par date
      const q = query(
        collection(db, 'concerts'),
        orderBy('date')
      )

      // Récupération des documents
      const snapshot = await getDocs(q)

      // Transformation des documents en tableau d'objets
      setConcerts(
        snapshot.docs.map(d => ({
          id: d.id,
          ...d.data()
        }))
      )

      // Fin du chargement
      setLoading(false)
    }

    fetchConcerts()

  }, [])

  return (
    <section id="concert">

      <div className="concert-content">

        {/* Animation d'apparition du titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="concert-title">
            CONCERTS
          </h1>

        </motion.div>

        {/* Affichage pendant le chargement */}
        {loading ? (

          <p
            style={{
              color: '#9A8070',
              fontFamily: 'DM Sans'
            }}
          >
            Chargement...
          </p>

        ) : concerts.length === 0 ? (

          // Aucun concert enregistré
          <p
            style={{
              color: '#9A8070',
              fontFamily: 'DM Sans'
            }}
          >
            Aucune date annoncée.
          </p>

        ) : (

          // Liste des concerts
          <div className="concert-list">

            {concerts.map((c, i) => (

              <motion.div
                key={c.id}
                className="concert-row"

                // Animation d'apparition de chaque ligne
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08
                }}
              >

                {/* Informations du concert */}
                <div className="concert-info">

                  {/* Ville */}
                  <span className="concert-city">
                    {c.city}
                  </span>

                  {/* Ligne décorative */}
                  <span className="concert-dots" />

                  {/* Date */}
                  <span className="concert-date">
                    {c.date}
                  </span>

                </div>

                {/* Nom de la salle */}
                <span className="concert-venue">
                  {c.venue}
                </span>

                {/* Bouton de réservation */}
                <a
                  href={c.soldOut ? undefined : c.link}
                  target={c.soldOut ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className={
                    c.soldOut
                      ? "concert-btn-soldout"
                      : "concert-btn"
                  }

                  // Désactive le clic si le concert est complet
                  style={{
                    pointerEvents:
                      c.soldOut ? "none" : "auto"
                  }}
                >

                  {/* Texte affiché selon la disponibilité */}
                  {c.soldOut
                    ? "Sold Out"
                    : "Tickets"}

                </a>

              </motion.div>

            ))}

          </div>

        )}

      </div>

    </section>
  )
}