import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Form from "./components/Form"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar />
   <Hero />
   <About />
   <Skills />
   <Form />
    </>
  )
}

export default App
