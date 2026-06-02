import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./NavBar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Concert from "./concert";
import Merch from "./Merch";
import Presentation from "./Presentation";

import Login from "./admin/admin_vues/Login";
import Dashboard from "./admin/admin_vues/Dashboard";
import AddDate from "./admin/admin_vues/AddDate";
import ProtectedRoute from "./admin/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Site public */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Presentation />
              <About />
              <Concert />
              <Merch />
              <Contact />
            </>
          }
        />

        {/* Connexion Admin */}
        <Route
          path="/admin"
          element={<Login />}
        />

        {/* Dashboard Admin */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Ajouter une date */}
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