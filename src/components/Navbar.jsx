import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <Link to='/all-articles'>Novel Research</Link>
      <Link to='/all-news'>Current News</Link>
      <Link to='/'><h1>NeuroLog</h1></Link>
    </div>
  )
}
