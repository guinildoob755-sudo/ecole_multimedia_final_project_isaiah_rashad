import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const [user, setUser]       = useState(undefined)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser)
    return unsub
  }, [])

  if (user === undefined) return <p>Chargement...</p>
  if (!user) return <Navigate to="/admin" />
  return children
}