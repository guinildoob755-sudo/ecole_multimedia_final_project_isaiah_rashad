import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import AdminNav from "../composants/nav/AdminNav";

export default function AddDate() {
  const [city, setCity]   = useState("");
  const [date, setDate]   = useState("");
  const [venue, setVenue] = useState("");
  const [link, setLink]   = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city || !date || !venue) {
      setError("Ville, date et salle sont obligatoires.");
      return;
    }

    try {
      await addDoc(collection(db, "concerts"), { city, date, venue, link });
      setCity(""); setDate(""); setVenue(""); setLink("");
      setError("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Erreur lors de l'ajout.");
      console.error(err);
    }
  };

  return (
    <div className="admin-layout">
      <AdminNav />

      <main className="admin-content">
        <h1>Ajouter une date</h1>

        {success && <p className="admin-success">✓ Concert ajouté avec succès</p>}
        {error   && <p className="admin-error">{error}</p>}

        <form onSubmit={handleSubmit} className="admin-form-page">

          <div className="admin-field">
            <label>Ville *</label>
            <input
              placeholder="ex: Paris"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="admin-field">
            <label>Date *</label>
            <input
              placeholder="ex: 15 JUN 2026"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="admin-field">
            <label>Salle *</label>
            <input
              placeholder="ex: Olympia"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />
          </div>

          <div className="admin-field">
            <label>Lien billetterie</label>
            <input
              placeholder="https://..."
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <button type="submit" className="admin-submit-btn">
            Ajouter la date
          </button>

        </form>
      </main>
    </div>
  );
}