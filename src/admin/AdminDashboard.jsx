import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { db, auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard() {
  const [concerts, setConcerts] = useState([])
  const [form, setForm]         = useState({ city: '', date: '', venue: '', link: '' })
  const navigate                = useNavigate()

  // Charger les concerts depuis Firestore
  const fetchConcerts = async () => {
    const snapshot = await getDocs(collection(db, 'concerts'))
    setConcerts(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
  }

  useEffect(() => { fetchConcerts() }, [])

  // Ajouter un concert
  const handleAdd = async () => {
    if (!form.city || !form.date) return
    await addDoc(collection(db, 'concerts'), form)
    setForm({ city: '', date: '', venue: '', link: '' })
    fetchConcerts()
  }

  // Supprimer un concert
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'concerts', id))
    fetchConcerts()
  }

  // Modifier un concert
  const handleUpdate = async (id, field, value) => {
    await updateDoc(doc(db, 'concerts', id), { [field]: value })
    fetchConcerts()
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/admin')
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Gestion des Concerts</h1>
        <button onClick={handleLogout} className="admin-logout">Déconnexion</button>
      </div>

      {/* Formulaire ajout */}
      <div className="admin-add">
        <h2>Ajouter une date</h2>
        <div className="admin-inputs">
          <input placeholder="Ville"    value={form.city}   onChange={e => setForm({...form, city: e.target.value})} />
          <input placeholder="Date"     value={form.date}   onChange={e => setForm({...form, date: e.target.value})} type="date" />
          <input placeholder="Salle"    value={form.venue}  onChange={e => setForm({...form, venue: e.target.value})} />
          <input placeholder="Lien billetterie" value={form.link} onChange={e => setForm({...form, link: e.target.value})} />
          <button onClick={handleAdd} className="admin-btn-add">Ajouter</button>
        </div>
      </div>

      {/* Liste des concerts */}
      <div className="admin-list">
        {concerts.map(c => (
          <div key={c.id} className="admin-row">
            <input defaultValue={c.city}  onBlur={e => handleUpdate(c.id, 'city',  e.target.value)} />
            <input defaultValue={c.date}  onBlur={e => handleUpdate(c.id, 'date',  e.target.value)} />
            <input defaultValue={c.venue} onBlur={e => handleUpdate(c.id, 'venue', e.target.value)} />
            <input defaultValue={c.link}  onBlur={e => handleUpdate(c.id, 'link',  e.target.value)} />
            <button onClick={() => handleDelete(c.id)} className="admin-btn-delete">Supprimer</button>
          </div>
        ))}
      </div>
    </div>
  )
}