import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "./firebase"

export default function Concert() {
  const [concerts, setConcerts] = useState([])
  const [loading, setLoading]   = useState(true)

  useEffect(() => {
    const fetchConcerts = async () => {
      const q        = query(collection(db, 'concerts'), orderBy('date'))
      const snapshot = await getDocs(q)
      setConcerts(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
      setLoading(false)
    }
    fetchConcerts()
  }, [])

  return (
    <section id="concert">
      <div className="concert-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="concert-title">CONCERTS</h1>
        </motion.div>

        {loading ? (
          <p style={{ color: '#9A8070', fontFamily: 'DM Sans' }}>Chargement...</p>
        ) : concerts.length === 0 ? (
          <p style={{ color: '#9A8070', fontFamily: 'DM Sans' }}>Aucune date annoncée.</p>
        ) : (
          <div className="concert-list">
            {concerts.map((c, i) => (
              <motion.div
                key={c.id}
                className="concert-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="concert-info">
                  <span className="concert-city">{c.city}</span>
                  <span className="concert-dots" />
                  <span className="concert-date">{c.date}</span>
                </div>

                <span className="concert-venue">{c.venue}</span>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="concert-btn"
                >
                  Tickets
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}