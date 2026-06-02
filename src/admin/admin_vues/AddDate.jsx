import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import AdminNav from "../composants/nav/AdminNav";

export default function AddDate() {
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "concerts"), {
      city,
      date,
      venue,
      link
    });

    setCity("");
    setDate("");
    setVenue("");
    setLink("");

    alert("Concert ajouté");
  };

  return (
    <div className="admin-layout">
      <AdminNav />

      <main className="admin-content">
        <h1>Ajouter une date</h1>

        <form onSubmit={handleSubmit} className="admin-form">
          <input
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            placeholder="Salle"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />

          <input
            placeholder="Lien billetterie"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <button type="submit">
            Ajouter
          </button>
        </form>
      </main>
    </div>
  );
}