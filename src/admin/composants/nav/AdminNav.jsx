import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export default function AdminNav() {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/admin");
  };

  return (
    <nav className="admin-nav">
      <h2>LAB201</h2>

      <Link to="/admin/dashboard">
        Dashboard
      </Link>

      <Link to="/admin/add-date">
        Ajouter une date
      </Link>

      <button onClick={logout}>
        Déconnexion
      </button>
    </nav>
  );
}