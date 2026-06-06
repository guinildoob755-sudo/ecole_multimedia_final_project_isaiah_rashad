import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

// Import du menu de navigation du site
import Navbar from "./NavBar";

// Import des différentes sections du site public
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Concert from "./concert";
import Merch from "./Merch";
import Presentation from "./Presentation";

// Import des pages de l'administration
import Login from "./admin/admin_vues/Login";
import Dashboard from "./admin/admin_vues/Dashboard";
import AddDate from "./admin/admin_vues/AddDate";

// Import du composant qui protège les pages admin
import ProtectedRoute from "./admin/ProtectedRoute";

export default function App() {

  return (
    <BrowserRouter>

      {/* Contient toutes les routes de l'application */}
      <Routes>

        {/* =========================
            SITE PUBLIC
        ========================= */}

        <Route
          path="/"
          element={
            <>
              {/* Barre de navigation */}
              <Navbar />

              {/* Sections du site */}
              <Home />
              <Presentation />
              <About />
              <Concert />
              <Merch />
              <Contact />
            </>
          }
        />

        {/* =========================
            PAGE DE CONNEXION ADMIN
        ========================= */}

        <Route
          path="/admin"
          element={<Login />}
        />

        {/* =========================
            DASHBOARD ADMIN
            Accessible uniquement
            si l'utilisateur est connecté
        ========================= */}

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* =========================
            PAGE AJOUT D'UNE DATE
            Protégée par authentification
        ========================= */}

        <Route
          path="/admin/add-date"
          element={
            <ProtectedRoute>
              <AddDate />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}