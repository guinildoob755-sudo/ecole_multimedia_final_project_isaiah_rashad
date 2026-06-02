import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import AdminNav from "../composants/nav/AdminNav";

export default function Dashboard() {
  const [concerts, setConcerts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="admin-layout">
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
                  <td>{concert.city}</td>
                  <td>{concert.date}</td>
                  <td>{concert.venue}</td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteConcert(concert.id)
                      }
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