import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import About from '../pages/About'
import Highlights from '../pages/Highlights'
import Project from '../pages/Project'
import Pricing from '../pages/Pricing'

const Navbar = () => {
 
  const [mobilemenu, setMobilemenu] = useState(false)

  useEffect(()=>{
      if(mobilemenu){
        document.body.style.overflow='hidden'
      }
      else{
        document.body.style.overflow='auto'
      }
      return()=>{
         document.body.style.overflow='auto'
      }
  },[mobilemenu])

  return (
    <div> 
    <nav className="relative z-10 flex justify-between items-center px-10 py-6  top-0 left-0 w-full   text-white bg-neutral-500">
      <div className="flex items-center">
        <img
          className="h-12 md:h-16 "
          src="https://cdn.prod.website-files.com/677425503944c4eb93bd17ad/6898ff5e96f0cb3ab4f1482e_palladio-logo.webp"
          alt="Company Logo"
        />
      </div>
      <ul className="hidden md:flex gap-10 text-2xl font-medium ">
        <Link className='cursor-pointer hover:text-orange-400' to= '/' >Home</Link>
          <Link className='cursor-pointer hover:text-orange-400' to= '/about' >About</Link>
          <Link className='cursor-pointer hover:text-orange-400' to='/highlights'>Highlight</Link>
          <Link className='cursor-pointer hover:text-orange-400' to= '/project'>Project</Link>
          <Link className='cursor-pointer hover:text-orange-400' to='/pricing'>Pricing</Link>
  
 
</ul>

      <button className="hidden md:block bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-transform duration-300">
        Download Brochure
      </button>

      <div  className="md:hidden text-4xl font-bold cursor-pointer w-5" onClick={()=>{
          setMobilemenu(true)
      }} >☰</div>
    </nav>


     <div className={`md:hidden ${mobilemenu ? 'fixed w-full' : 'h-0 w-0'} bg-white text-black z-20 mt-0 top-0 bottom-0 overflow-hidden transition-all`}>

      <div className='text-3xl flex justify-end py-4 mr-4 cursor-pointer transition-transform duration-300'>
        ✕
      </div>
        <ul className="flex flex-col items-center md:hidden gap-2 text-xl font-medium mt-0">
          <Link className='cursor-pointer hover:text-orange-400' to= '/' >Home</Link>
          <Link className='cursor-pointer hover:text-orange-400' to= '/about' >About</Link>
          <Link className='cursor-pointer hover:text-orange-400' to='/highlights'>Highlight</Link>
          <Link className='cursor-pointer hover:text-orange-400' to= '/project'>Project</Link>
          <Link className='cursor-pointer hover:text-orange-400' to='/pricing'>Pricing</Link>
</ul>
    </div>

</div>
 
  )
}

export default Navbar
