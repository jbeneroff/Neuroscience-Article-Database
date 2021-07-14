import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <Link to='/all-articles' className='nav-item' >Novel Research</Link>
        <Link to='/all-news' className='nav-item' >Current News</Link>
      </div>
      <Link to='/' id='header' ><h1>NeuroLog</h1></Link>
    </div>
  )
}
