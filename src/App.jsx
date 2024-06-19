import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Choose from './components/Choose'
import Catalog from './components/Catalog'
import Works from './components/Works'
import Logo from './components/Logo'
import Footer from './components/Footer'
import Reviews from './components/Reviews'

export default function App() {
  return (
    <div>
      <Header/>
      <About/>
      <Services/> 
      <Choose/>
      <Catalog/>
      <Works/>  
      <Reviews/>
      <Logo/>
      <Footer/>
    </div>
  )
}
