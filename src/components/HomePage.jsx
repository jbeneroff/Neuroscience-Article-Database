import React from 'react'
import Slideshow from './SlideShow'
import './HomePage.css'

export default function HomePage(props) {

  return (
    <div className={`home ${props.darkMode ? "dark-home" : "light-home"}`}>
      <br />
      <h2 id='featured'>Featured Articles</h2>
      <br />
      <div>
        <Slideshow />
      </div>
      <br />
    </div>
  )
}
