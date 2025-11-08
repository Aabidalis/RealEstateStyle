import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Routes , Route} from 'react-router-dom'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Highlights from './pages/Highlights'
import Project from './pages/Project'
import Home from './components/Home'
 
 
 
const App = () => {
  return (
    <div>
      
 

 <Navbar/>
 
 

<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/pricing' element={<Pricing />} />
  <Route path='/highlights' element={<Highlights />} />
  <Route path='/project' element={<Project />} />
</Routes>



  

      <Footer />
      
    </div>
  )
}

export default App
