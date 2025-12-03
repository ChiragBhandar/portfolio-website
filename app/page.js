import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Details from './components/Details'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Details />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default page

