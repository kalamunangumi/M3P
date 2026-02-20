import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav'>
        <div className='title'>
            <h3><Link to="/">Home</Link></h3>     
        </div>

        <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>  
    </div>
  )
}