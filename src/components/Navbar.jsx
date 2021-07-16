import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar(props) {

  return (
      <div className='navbar'>
        <Link to='/' id='header' ><h1 className={`${props.darkMode ? "dark-header" : "light-header"}`}>NeuroLog</h1></Link>
        <div className='dropdown'>
          <button className="dropbtn">☰</button>
          <div className="dropdown-content" >
            <Link to='/' className='nav-item' >Home</Link>
            <Link to='/all-articles' className='nav-item' >Current Research</Link>
            <Link to='/all-news' className='nav-item' >Popular News</Link>
          </div>
        </div>
      </div>
  )
}
