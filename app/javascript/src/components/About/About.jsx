import React from 'react'
import './About.css'
import { useNav } from '../../custonHooks/useNav'

const About = () => {
  const aboutRef = useNav('About');

  return (
    <div id='about' ref={aboutRef}>
    <div className='about' >
      <div className='container'>
        <div className='col-2'>
          <h2>About</h2>
          <span className='line'></span>
          <p>ABOUT</p>
          <button className='button'>Explore More</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About