import React, { useState, useEffect } from 'react'
import { useNav } from '../../custonHooks/useNav'
import './Home.css'
import Selection from './Selection'

const Home = () => {
    const homeRef = useNav('Home')

    const skills = (
        <div className='change'>
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
    )
    const resume = (
        <div className='change'>
            <div>
                <h2>Resume</h2>
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
    )
    const media = ( 
        <div className='change'>
            <div>
                <h2>Media</h2>
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
    )
    const [selection, setSelection] = useState(skills)

   /*  useEffect(() => {
        setSelection(skills)
    }, []) */
    const handleClick = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    return (
        <div ref={homeRef} className='home' id='home'>
            <div className='container'>
                <div className='header'>
                    <div className='title'>
                        <h1>Shami Tomita</h1>
                    </div>
                    <div className="sub-title">
                        <h4>Full Stack Developer</h4>  <h4>|</h4> <h4>Open Source Contributor</h4> <h4>|</h4> <h4>Rubyist</h4>
                    </div>
                    <div className="blurb">
                        I am a Philadelphia based Full Stack Developer with a background in the culinary industry. I enjoy contributing to open source projects, engaging with the Ruby community, and day dreaming about what to cook next.
                    </div>
                    <br />
                    <div className='links'>
                        <div><h3 value="skills" onClick={e => handleClick(e)}>Skills</h3></div>
                        <div><h3 value="resume" onClick={e => handleClick(e)}>Resume</h3></div>
                        <div><h3 value="media" onClick={e => handleClick(e)}>Media</h3></div>
                    </div>
                </div>
                    <Selection props={selection}/>
            </div>
        </div>
    )
}

export default Home