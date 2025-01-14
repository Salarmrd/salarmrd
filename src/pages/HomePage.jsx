import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Form from '../components/Form'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Form />
        <Footer />
    </>
  )
}

export default HomePage