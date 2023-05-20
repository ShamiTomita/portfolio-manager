import React from 'react'
import { useNav } from '../../custonHooks/useNav'
import './Home.css'

const Home = () => {
    const homeRef = useNav('Home')
    return (
        <div ref={homeRef} className='home' id='home'>
            <div className='container'>
                <div className='col-2'>
                    <h2>Home</h2>
                    <span className='line'></span>
                    <p>HOME!</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default Home