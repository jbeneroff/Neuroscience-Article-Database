import React from 'react'
import Slideshow from './SlideShow'
import './HomePage.css'

export default function HomePage() {


  return (
    <div className='home'>
      <h2>Welcome to your resource for the newest and most interesting neuroscience research and news.</h2>
      <br />
      <h1>Resources</h1>
      <br />
      <div>
        <Slideshow />
      </div>
    </div>
  )
}
