import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {

  // Stocke l'utilisateur connecté
  // undefined = vérification en cours
  // null = non connecté
  // objet user = connecté
  const [user, setUser] = useState(undefined);

  useEffect(() => {

    // Écoute les changements de connexion Firebase
    const unsub = onAuthStateChanged(auth, setUser);

    // Nettoyage de l'écouteur lorsque le composant est démonté
    return unsub;

  }, []);

  // Affiche un message pendant la vérification de connexion
  if (user === undefined) {
    return <p>Chargement...</p>;
  }

  // Si l'utilisateur est connecté :
  // affiche la page protégée
  // sinon redirige vers la page de connexion admin
  return user
    ? children
    : <Navigate to="/admin" />;
}