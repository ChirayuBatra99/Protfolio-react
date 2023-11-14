import React,{useState, useEffect} from 'react'
import '../styles/Navbar.css'
import { Link} from "react-router-dom";
function NavBar() {

  return (
    <div className='navbar'>
      <div className='toggle'>
      </div>

      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>


    </div>
  )
}

export default NavBar
