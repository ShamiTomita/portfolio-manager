import React from 'react'
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx'
import Awards from '../Awards/Awards.jsx'
import Projects from '../Projects/Projects.jsx'
import Contact from '../Contact/Contact.jsx'
import './Main.css'
function Main() {
  return (
          <div className="main">
              <Home />
              <About />
              {/* <Awards /> */}
              <Projects />
              <Contact/>
          </div>
  )
}

export default Main