import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import AdminNav from "../composants/nav/AdminNav";

export default function Dashboard() {

  // Liste des concerts récupérés depuis Firestore
  const [concerts, setConcerts] = useState([]);

  // Permet d'afficher un message pendant le chargement des données
  const [loading, setLoading] = useState(true);

  // ID du concert actuellement en cours de modification
  const [editingId, setEditingId] = useState(null);

  // États utilisés pour remplir les champs du formulaire d'édition
  const [editCity, setEditCity] = useState("");
  const [editCountry, setEditCountry] = useState("");
  const [editDate, setEditDate] = useState("");
  const [editVenue, setEditVenue] = useState("");
  const [editSoldOut, setEditSoldOut] = useState(false);

  // Récupère tous les concerts depuis la collection Firestore
  const loadConcerts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "concerts"));

      // On transforme les documents Firestore en tableau d'objets
      setConcerts(
        snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }))
      );
    } catch (error) {
      console.error(error);
    }

    // Fin du chargement
    setLoading(false);
  };

  // Exécuté une seule fois au chargement du composant
  useEffect(() => {
    loadConcerts();
  }, []);

  // Supprime un concert de Firestore
  const deleteConcert = async (id) => {

    // Demande une confirmation avant suppression
    if (!window.confirm("Supprimer cette date ?")) return;

    try {
      // Suppression du document dans Firestore
      await deleteDoc(doc(db, "concerts", id));

      // Mise à jour immédiate de l'affichage
      setConcerts((prev) =>
        prev.filter((c) => c.id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Prépare l'édition d'un concert
  const startEdit = (concert) => {

    // Stocke l'id du concert en cours de modification
    setEditingId(concert.id);

    // Remplit les champs avec les données actuelles
    setEditCity(concert.city);
    setEditCountry(concert.country || "");
    setEditDate(concert.date);
    setEditVenue(concert.venue);
    setEditSoldOut(concert.soldOut || false);
  };

  // Enregistre les modifications dans Firestore
  const saveEdit = async () => {
    try {

      // Mise à jour du document avec toutes les nouvelles valeurs
      await updateDoc(doc(db, "concerts", editingId), {
        city: editCity,
        country: editCountry,
        date: editDate,
        venue: editVenue,
        soldOut: editSoldOut,
      });

      // Mise à jour du state local pour éviter de recharger la page
      setConcerts((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? {
                ...c,
                city: editCity,
                country: editCountry,
                date: editDate,
                venue: editVenue,
                soldOut: editSoldOut,
              }
            : c
        )
      );

      // Quitte le mode édition
      setEditingId(null);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="admin-layout">

      {/* Barre de navigation admin */}
      <AdminNav />

      <main className="admin-content">

        <h1>Gestion des concerts</h1>

        {/* Affichage pendant le chargement */}
        {loading ? (
          <p className="admin-loading">Chargement...</p>

        ) : concerts.length === 0 ? (

          // Aucun concert trouvé
          <p className="admin-loading">Aucune date enregistrée.</p>

        ) : (

          // Tableau des concerts
          <div className="table-wrapper">
            <table className="admin-table">

              <thead>
                <tr>
                  <th>Ville</th>
                  <th>Pays</th>
                  <th>Date</th>
                  <th>Salle</th>
                  <th>Sold Out</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {concerts.map((concert) => (
                  <tr key={concert.id}>

                    {/* Ville */}
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

                    {/* Pays */}
                    <td>
                      {editingId === concert.id ? (
                        <input
                          value={editCountry}
                          onChange={(e) => setEditCountry(e.target.value)}
                        />
                      ) : (
                        concert.country
                      )}
                    </td>

                    {/* Date */}
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

                    {/* Salle */}
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

                    {/* Statut Sold Out */}
                    <td>
                      {editingId === concert.id ? (
                        <label className="admin-toggle">

                          <input
                            type="checkbox"
                            checked={editSoldOut}
                            onChange={(e) =>
                              setEditSoldOut(e.target.checked)
                            }
                          />

                          <span>
                            {editSoldOut ? "Sold Out" : "Disponible"}
                          </span>

                        </label>
                      ) : (
                        <span
                          className={
                            concert.soldOut
                              ? "badge-soldout"
                              : "badge-available"
                          }
                        >
                          {concert.soldOut
                            ? "Sold Out"
                            : "Disponible"}
                        </span>
                      )}
                    </td>

                    {/* Boutons d'action */}
                    <td className="admin-actions">

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
          </div>
        )}

      </main>
    </div>
  );
}