import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import AdminNav from "../composants/nav/AdminNav";

// Liste des mois en français — utilisée dans le <select>
const months = [
  "JAN", "FÉV", "MAR", "AVR", "MAI", "JUN",
  "JUL", "AOÛ", "SEP", "OCT", "NOV", "DÉC"
]

export default function AddDate() {

  // --- ÉTATS DU FORMULAIRE ---
  const [city,    setCity]    = useState(""); // Ville du concert
  const [country, setCountry] = useState(""); // Pays du concert
  const [day,     setDay]     = useState(""); // Jour (ex: 15)
  const [month,   setMonth]   = useState(""); // Mois (ex: JUN)
  const [year,    setYear]    = useState(""); // Année (ex: 2026)
  const [venue,   setVenue]   = useState(""); // Nom de la salle
  const [link,    setLink]    = useState(""); // Lien billetterie (optionnel)

  // --- ÉTATS DU FEEDBACK ---
  const [success, setSuccess] = useState(false); // true = message de succès affiché
  const [error,   setError]   = useState("");     // message d'erreur affiché si non vide

  // --- SOUMISSION DU FORMULAIRE ---
  const handleSubmit = async (e) => {
    e.preventDefault(); // empêche le rechargement de la page

    // Validation : vérifie que les champs obligatoires sont remplis
    if (!city || !country || !day || !month || !year || !venue) {
      setError("Tous les champs obligatoires doivent être remplis.");
      return; // stoppe la fonction si un champ manque
    }

    // Formate la date en string lisible ex: "15 JUN 2026"
    const formattedDate = `${day} ${month} ${year}`;

    try {
      // Ajoute un nouveau document dans la collection "concerts" de Firestore
      await addDoc(collection(db, "concerts"), {
        city,
        country,
        date: formattedDate, // on envoie la date formatée, pas les 3 champs séparés
        venue,
        link
      });

      // Remet tous les champs à vide après l'ajout
      setCity(""); setCountry(""); setDay(""); setMonth("");
      setYear(""); setVenue(""); setLink("");

      // Affiche le message de succès pendant 3 secondes
      setError("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

    } catch (err) {
      // En cas d'erreur Firebase, affiche un message
      setError("Erreur lors de l'ajout.");
      console.error(err);
    }
  };

  return (
    <div className="admin-layout">
      <AdminNav />

      <main className="admin-content">
        <h1>Ajouter une date</h1>

        {/* Messages de feedback — affichés conditionnellement */}
        {success && <p className="admin-success">✓ Concert ajouté avec succès</p>}
        {error   && <p className="admin-error">{error}</p>}

        <form onSubmit={handleSubmit} className="admin-form-page">

          {/* Ville */}
          <div className="admin-field">
            <label>Ville *</label>
            <input
              placeholder="ex: Paris"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* Pays */}
          <div className="admin-field">
            <label>Pays *</label>
            <input
              placeholder="ex: France"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          {/* Date — 3 champs : jour + mois (select) + année */}
          <div className="admin-field">
            <label>Date *</label>
            <div className="date-picker">

              {/* Jour : champ texte limité à 2 caractères */}
              <input
                placeholder="JJ"
                maxLength={2}
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="date-picker-day"
              />

              {/* Mois : liste déroulante avec les mois en français */}
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="date-picker-month"
              >
                <option value="">Mois</option>
                {months.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>

              {/* Année : champ texte limité à 4 caractères */}
              <input
                placeholder="AAAA"
                maxLength={4}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="date-picker-year"
              />

            </div>
          </div>

          {/* Salle */}
          <div className="admin-field">
            <label>Salle *</label>
            <input
              placeholder="ex: Olympia"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>

          {/* Lien billetterie — optionnel */}
          <div className="admin-field">
            <label>Lien billetterie</label>
            <input
              placeholder="https://..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          {/* Bouton de soumission */}
          <button type="submit" className="admin-submit-btn">
            Ajouter la date
          </button>

        </form>
      </main>
    </div>
  );
}