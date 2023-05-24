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
          <div className='blurb'>
              <p>Lorem Ipsums</p>
          </div>
          <div className='links'>
            <ul>
              <li>
                School
              </li>
              <li>
                Experience
              </li>
            </ul>
          </div>
          <div className='awards'>
            <ul>
              <li>
                Opportunity Scholar
              </li>
            </ul>
          </div>
          <button className='button'>Explore More</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About