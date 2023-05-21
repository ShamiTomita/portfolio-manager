import React from 'react'
import { useNav } from '../../custonHooks/useNav'
import './Home.css'

const Home = () => {
    const homeRef = useNav('Home')
    return (
        <div ref={homeRef} className='home' id='home'>
            <div className='container'>
                <div className='header'>
                    <div className='title'>
                        <h1>Shami Tomita </h1>
                    </div>
                    <div className="sub-title">
                        <h4>Full Stack Developer</h4>  <h4>|</h4> <h4>Open Source Contributor</h4> <h4>|</h4> <h4>Rubyist</h4>
                    </div>
                    <div className="blurb">
                        I am a Philadelphia based Full Stack Developer with a background in the culinary industry. I enjoy contributing to open source projects, engaging with the Ruby community, and day dreaming about what to cook next.
                    </div>
                    <br />
                    <div className='links'>
                        <div><h3>Resume -</h3></div>
                        <div><h3>- LinkedIn -</h3></div>
                        <div><h3>- Github </h3></div>
                    </div>
                </div>
                <div className='skills'>
                    <div>
                        <h2>Skills</h2>
                    </div>
                    <div className='categories'>
                        <div>
                            <h4>Langauges</h4>
                            <ul>
                                <li>Ruby</li>
                                <li>JavaScript</li>
                                <li>HTML&CSS</li>
                                <li>RSpec</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Frameworks</h4>
                            <ul>
                                <li>Ruby On Rails</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Databases</h4>
                            <ul>
                                <li>MySQL</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home