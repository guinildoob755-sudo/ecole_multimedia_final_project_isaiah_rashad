import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "../admin.css";

export default function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const navigate                = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="admin-login-box">

        <h1>LAB201</h1>
        <p className="admin-login-subtitle">Espace administration</p>

        {error && <p className="admin-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Se connecter</button>

      </form>
    </div>
  );
}