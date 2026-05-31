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


export default function App() {
  return (
    <>
      <Navbar />
      <Home />  
      <About />
      <Concert />
      <Merch />
      <Contact />
      
      
    </>
  )
}



