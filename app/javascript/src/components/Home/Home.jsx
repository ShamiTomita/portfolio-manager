import React, { useState, useEffect } from 'react'
import { useNav } from '../../custonHooks/useNav'
import './Home.css'
import Selection from './Selection'

const Home = () => {
    const homeRef = useNav('Home')

    const skills = (
        <div className='change'>
            <div>
                <h2 className='title-gradient'>Skills</h2>
            </div>
            <div className='categories-resume'>
                <div>
                    <h3>Langauges</h3>
                    <ul>
                        <li>Ruby</li>
                        <li>JavaScript</li>
                        <li>HTML&CSS</li>
                        <li>RSpec</li>
                    </ul>
                </div>
                <div>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>Ruby On Rails</li>
                        <li>React</li>
                    </ul>
                </div>
                <div>
                    <h3>Databases</h3>
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
                <h2 className='title-gradient'>Resume</h2>
            </div>
            <div className='categories-resume'>
                <div>
                    <h3>Work Experince</h3>
                    <ul>
                        <li>
                            Ruby For Good - Open Source Contributor
                        </li>
                        <li>
                            Agency of Learning - Apprentice Developer
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Education</h3>
                    <ul>
                        <li>
                            Flaitor School
                        </li>
                        <li>
                            NYU
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Projects</h3>
                    <ul>
                        <li>
                            CASA
                        </li>
                        <li>
                            Full List:
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    const media = ( 
        <div className='change'>
            <div>
                <h2 className='title-gradient'>Media</h2>
            </div>
            <div className='categories-resume'>
                <div>
                </div>
                <div>
                    <h3>Blog Posts</h3>
                    <ul>
                       <li>Link 1</li>
                       <li>Link 2</li>
                       <li>Link 3</li>
                    </ul>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
    const [selection, setSelection] = useState(skills)

    const handleClick = (e) => {
        e.preventDefault()
        if (e.target.value === "skills"){
            setSelection(skills)
        }else if (e.target.value === "resume"){
            setSelection(resume)
        }else if (e.target.value === "media"){
            setSelection(media)
        }
    }
    return (
        <div ref={homeRef} className='home' id='home'>
            <div className='container'>
                <div className='header'>
                    <div className='title'>
                        <h1 className='title-gradient'>Shami Tomita</h1>
                    </div>
                    <div className="sub-title">
                        <h4>Full Stack Developer</h4>  <h4>|</h4> <h4>Open Source Contributor</h4> <h4>|</h4> <h4>Rubyist</h4>
                    </div>
                    <div className="blurb">
                        I am a Philadelphia based Full Stack Developer with a background in the culinary industry. I enjoy contributing to open source projects, engaging with the Ruby community, and day dreaming about what to cook next.
                    </div>
                    <br />
                    <div className='links'>
                        <div><button value="skills" onClick={(e) => handleClick(e)}>Skills</button></div>
                        <div><button value="resume" onClick={(e) => handleClick(e)}>Resume</button></div>
                        <div><button value="media" onClick={(e) => handleClick(e)}>Media</button></div>
                    </div>
                </div>
                    <Selection props={selection}/>
            </div>
        </div>
    )
}

export default Home