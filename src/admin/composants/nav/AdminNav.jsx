import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export default function AdminNav() {

  // Permet de rediriger l'utilisateur vers une autre page
  const navigate = useNavigate();

  // Permet de connaître l'URL actuelle
  const location = useLocation();

  // Fonction appelée lors de la déconnexion
  const logout = async () => {

    // Déconnecte l'utilisateur de Firebase
    await signOut(auth);

    // Redirige vers la page de connexion admin
    navigate("/admin");
  };

  return (
    <nav className="admin-nav">

      {/* Logo ou nom de l'administration */}
      <div className="admin-nav-logo">
        IT'S BEEN AWFUL
      </div>

      {/* Liens de navigation */}
      <div className="admin-nav-links">

        {/* Lien vers le dashboard */}
        <Link
          to="/admin/dashboard"
          className={
            location.pathname === "/admin/dashboard"
              ? "active"
              : ""
          }
        >
          Dashboard
        </Link>

        {/* Lien vers la page d'ajout d'une date */}
        <Link
          to="/admin/add-date"
          className={
            location.pathname === "/admin/add-date"
              ? "active"
              : ""
          }
        >
          Ajouter une date
        </Link>

      </div>

      {/* Bouton de déconnexion */}
      <button
        className="admin-logout-btn"
        onClick={logout}
      >
        Déconnexion
      </button>

    </nav>
  );
}