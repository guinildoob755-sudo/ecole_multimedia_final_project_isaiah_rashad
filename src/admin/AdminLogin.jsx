import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const navigate                = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/admin/dashboard')
    } catch {
      setError('Email ou mot de passe incorrect')
    }
  }

  return (
    <div className="admin-login">
      <h1>Admin</h1>
      {error && <p className="admin-error">{error}</p>}
      <div className="admin-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Se connecter</button>
      </div>
    </div>
  )
}