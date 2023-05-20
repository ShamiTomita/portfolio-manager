import React from 'react'
import { useNav } from '../../custonHooks/useNav'
import './Contact.css'

const Contact = () => {
  const contactRef = useNav('Contact')
  return (
    <div ref={contactRef} className='contact' id='contact'>
      <div className='container'>
        <div className='col-2'>
          <h2>Contact</h2>
          <span className='line'></span>
          <p>Contact!</p>
          <button className='button'>Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default Contact