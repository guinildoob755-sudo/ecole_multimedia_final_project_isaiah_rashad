import { useEffect, useState } from "react";
import {collection,getDocs,deleteDoc,doc,updateDoc,} from "firebase/firestore";
import { db } from "../../firebase";
import AdminNav from "../composants/nav/AdminNav";



export default function Dashboard() {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editCity, setEditCity] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editVenue, setEditVenue] = useState("");

  const loadConcerts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "concerts"));

      const data = snapshot.docs.map((docu) => ({
        id: docu.id,
        ...docu.data(),
      }));

      setConcerts(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadConcerts();
  }, []);

  const deleteConcert = async (id) => {
    const confirmDelete = window.confirm(
      "Supprimer cette date ?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "concerts", id));

      setConcerts((prev) =>
        prev.filter((concert) => concert.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const startEdit = (concert) => {
  setEditingId(concert.id);
  setEditCity(concert.city);
  setEditDate(concert.date);
  setEditVenue(concert.venue);
};

const saveEdit = async () => {
  try {
    await updateDoc(doc(db, "concerts", editingId), {
      city: editCity,
      date: editDate,
      venue: editVenue,
    });

    setConcerts((prev) =>
      prev.map((c) =>
        c.id === editingId
          ? {
              ...c,
              city: editCity,
              date: editDate,
              venue: editVenue,
            }
          : c
      )
    );

    setEditingId(null);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="table-wrapper">
      <AdminNav />

      <main className="admin-content">
        <h1>Gestion des concerts</h1>

        {loading ? (
          <p>Chargement...</p>
        ) : concerts.length === 0 ? (
          <p>Aucune date enregistrée.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Ville</th>
                <th>Date</th>
                <th>Salle</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {concerts.map((concert) => (
                    <tr key={concert.id}>
                    <td>
                        {editingId === concert.id ? (
                        <input
                            value={editCity}
                            onChange={(e) => setEditCity(e.target.value)}
                        />
                        ) : (
                        concert.city
                        )}
                    </td>

                    <td>
                        {editingId === concert.id ? (
                        <input
                            value={editDate}
                            onChange={(e) => setEditDate(e.target.value)}
                        />
                        ) : (
                        concert.date
                        )}
                    </td>

                    <td>
                        {editingId === concert.id ? (
                        <input
                            value={editVenue}
                            onChange={(e) => setEditVenue(e.target.value)}
                        />
                        ) : (
                        concert.venue
                        )}
                    </td>

                    <td>
                        {editingId === concert.id ? (
                        <button
                            className="save-btn"
                            onClick={saveEdit}
                        >
                            Enregistrer
                        </button>
                        ) : (
                        <button
                            className="edit-btn"
                            onClick={() => startEdit(concert)}
                        >
                            Modifier
                        </button>
                        )}

                        <button
                        className="delete-btn"
                        onClick={() => deleteConcert(concert.id)}
                        >
                        Supprimer
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
          </table>
        )}
      </main>
    </div>
  );
}