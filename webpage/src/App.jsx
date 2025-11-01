import { useState } from 'react'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Project from './assets/components/Highlights'
import Design from './assets/components/Design'
import Plans from './assets/components/Plans'
import Contact from './assets/components/Contact'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './assets/components/Footer'
 
 

function App() {
   

  return (
    <>
     <ToastContainer />
     <Hero />
     <About />
     <Project />
     <Design />
     <Plans />
     <Contact />
     <Footer />
    </>
  )
}

export default App
