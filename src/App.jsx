import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './NavBar'
import Home from './home'
import About from './about'


export default function App() {
  return (
    <>
      <Navbar />
      <Home />  
      <About />
      <section id="music">music</section>
      <section id="contact">contact</section>
    </>
  )
}



