import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './NavBar'
import Home from './home'
import About from './about'
import Contact from './contact'


export default function App() {
  return (
    <>
      <Navbar />
      <Home />  
      <About />
      <section id="concert">concert</section>
      <section id="music">music</section>
      <Contact />
      
      
    </>
  )
}



