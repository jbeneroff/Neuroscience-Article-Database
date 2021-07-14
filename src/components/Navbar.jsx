import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
      <Link to='/all-articles' className='navbar' >Novel Research</Link>
      <Link to='/all-news' className='navbar' >Current News</Link>
      <Link to='/' id='header' ><h1>NeuroLog</h1></Link>
    </div>
  )
}
