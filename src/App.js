import React from 'react'
import Navbar from './component/Navbar'
import Skills from './component/Skills'
import './App.css'
import Projects from './component/Projects'
import Contact from './component/Contact'
import About from './component/About'
import Footer from './component/Footer'
export default function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
