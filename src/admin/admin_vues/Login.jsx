import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "../admin.css";

export default function Login() {

  // Stocke l'email saisi par l'utilisateur
  const [email, setEmail] = useState("");

  // Stocke le mot de passe saisi
  const [password, setPassword] = useState("");

  // Contient le message d'erreur en cas d'échec de connexion
  const [error, setError] = useState("");

  // Permet de rediriger l'utilisateur vers une autre page
  const navigate = useNavigate();

  // Fonction appelée lors de l'envoi du formulaire
  const handleSubmit = async (e) => {

    // Empêche le rechargement de la page
    e.preventDefault();

    try {

      // Vérifie les identifiants avec Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);

      // Redirection vers le dashboard admin si la connexion réussit
      navigate("/admin/dashboard");

    } catch {

      // Affiche un message d'erreur si la connexion échoue
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="admin-login">

      {/* Formulaire de connexion */}
      <form
        onSubmit={handleSubmit}
        className="admin-login-box"
      >

        {/* Titre principal */}
        <h1>IT'S BEEN AWFUL</h1>

        {/* Sous-titre */}
        <p className="admin-login-subtitle">
          Espace administration
        </p>

        {/* Message d'erreur affiché uniquement si une erreur existe */}
        {error && (
          <p className="admin-error">
            {error}
          </p>
        )}

        {/* Champ email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Champ mot de passe */}
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Bouton de connexion */}
        <button type="submit">
          Se connecter
        </button>

      </form>
    </div>
  );
}