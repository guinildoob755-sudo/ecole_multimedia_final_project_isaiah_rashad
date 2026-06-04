import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export default function AdminNav() {
  const navigate  = useNavigate();
  const location  = useLocation();

  const logout = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  return (
    <nav className="admin-nav">

      <div className="admin-nav-logo">LAB201</div>

      <div className="admin-nav-links">
        <Link
          to="/admin/dashboard"
          className={location.pathname === "/admin/dashboard" ? "active" : ""}
        >
          Dashboard
        </Link>
        <Link
          to="/admin/add-date"
          className={location.pathname === "/admin/add-date" ? "active" : ""}
        >
          Ajouter une date
        </Link>
      </div>

      <button className="admin-logout-btn" onClick={logout}>
        Déconnexion
      </button>

    </nav>
  );
}