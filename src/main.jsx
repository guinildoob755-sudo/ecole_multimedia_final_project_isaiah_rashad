import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Création du point d'entrée principal de l'application React
ReactDOM.createRoot(
  document.getElementById('root')
).render(

  // StrictMode permet de détecter certaines erreurs
  // et bonnes pratiques pendant le développement
  <React.StrictMode>

    {/* Composant principal de l'application */}
    <App />

  </React.StrictMode>
)