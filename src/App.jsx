import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'
import Navbar from './NavBar'
import Home from './home'
import About from './about'
import Contact from './contact'
import Concert from './concert'
import Merch from './Merch'
import Presentation from './Presentation'

import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import ProtectedRoute from './admin/ProtectedRoute'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Site public */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home /> 
            <Presentation />  
            <About />
            <Concert />
            <Merch />
            <Contact />
          </>
        } />

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}



