import { motion } from 'framer-motion'

export default function Presentation() {

  return (

    <motion.section
      id="presentation"

      // Animation de la section lors du chargement
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <div className="presentation-content">

        {/* =========================
            BLOC PRÉSENTATION DE L'ALBUM
        ========================= */}
        <motion.div
          className="presentation-block"

          // Animation d'apparition depuis la gauche
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Titre du bloc */}
          <p className="presentation-label">
            — L'ALBUM
          </p>

          {/* Description de l'album */}
          <p className="presentation-body">
            Seize titres construits sur cinq ans de silence,
            de mauvais choix et du travail lent de revenir
            à quelque chose de réel.
          </p>

          <p className="presentation-body">
            Produit entre Chattanooga et Los Angeles avec
            une équipe de longue date, l'album puise dans
            le rap sudiste, le R&B alternatif des années
            2000 et le genre de disques soul qui ne
            s'annoncent pas.
          </p>

          <p className="presentation-body">
            SZA, Dominic Fike et Julian Sintonia —
            chacun là où le morceau avait besoin
            d'une deuxième voix, pas d'un featuring.
          </p>

          <p className="presentation-body">
            L'intention n'a jamais été un retour.
            C'était un règlement de comptes.
          </p>

          <p className="presentation-body">
            <em>It's Been Awful</em> s'installe dans les
            décombres — l'addiction, la distance,
            ceux qui sont restés, ceux qui ne sont
            pas restés — sans chercher à tout résoudre
            proprement.
          </p>

          {/* Phrase de conclusion du bloc */}
          <p className="presentation-body presentation-closing">
            Ce qui en ressort n'est pas tant une rédemption
            qu'une honnêteté.
          </p>

        </motion.div>

        {/* =========================
            BLOC PRÉSENTATION DE L'ARTISTE
        ========================= */}
        <motion.div
          className="presentation-block"

          // Animation avec un léger délai
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2
          }}
        >

          {/* Titre du bloc */}
          <p className="presentation-label">
            — L'ARTISTE
          </p>

          {/* Présentation de l'artiste */}
          <p className="presentation-body">
            Chattanooga, Tennessee. TDE depuis 2012.
            Deux projets —
            <em> Cilvia Demo</em> et
            <em> The Sun's Tirade</em> —
            qui ont construit l'un des publics
            les plus fidèles du rap sans jamais
            courir après la tendance.
          </p>

          <p className="presentation-body">
            Puis un long silence, et maintenant ça.
          </p>

          {/* Citation de l'artiste */}
          <p className="presentation-quote">
            " Je fais de la musique sur ce que je connais —
            d'où je viens, les gens autour de moi,
            les erreurs que j'ai faites et celles
            que je fais encore. Rien de plus compliqué
            que ça. "
          </p>

        </motion.div>

        {/* =========================
            PHRASE DE CONCLUSION
        ========================= */}
        <motion.div
          className="presentation-chapter"

          // Animation d'apparition depuis le bas
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3
          }}
        >

          <p>
            It's Been Awful est le troisième chapitre.
          </p>

        </motion.div>

      </div>

    </motion.section>
  )
}