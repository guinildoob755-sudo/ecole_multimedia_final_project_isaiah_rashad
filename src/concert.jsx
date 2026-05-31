import { motion } from "framer-motion";

const concerts = [
  { id: 1, city: "New York", venue: "Brooklyn Steel", date: "15 JUN 2026", tickets: "https://ticketmaster.com" },
  { id: 2, city: "Memphis", venue: "Minglewood Hall", date: "22 JUN 2026", tickets: "https://ticketmaster.com" },
  { id: 3, city: "Los Angeles", venue: "The Wiltern", date: "29 JUN 2026", tickets: "https://ticketmaster.com" },
  { id: 4, city: "Houston", venue: "House of Blues", date: "06 JUL 2026", tickets: "https://ticketmaster.com" },
  { id: 5, city: "Atlanta", venue: "Tabernacle", date: "13 JUL 2026", tickets: "https://ticketmaster.com" },
  { id: 6, city: "Chicago", venue: "Aragon Ballroom", date: "20 JUL 2026", tickets: "https://ticketmaster.com" },
];

export default function Concert() {
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
                href={c.tickets}
                target="_blank"
                rel="noopener noreferrer"
                className="concert-btn"
              >
                Tickets
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}