import React from 'react'
import Slideshow from './SlideShow'
import './HomePage.css'

export default function HomePage(props) {

  return (
    <div className={`home ${props.darkMode ? "dark-home" : "light-home"}`}>
      {/* <h2>Welcome to your link to the newest and most interesting neuroscience research and news.</h2> */}
      <br />
      <h2>Featured Articles</h2>
      <br />
      <div>
        <Slideshow />
      </div>
      <br />
    </div>
  )
}
