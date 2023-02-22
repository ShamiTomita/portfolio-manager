import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from 'react';
import { render } from "react-dom";
import Clicker from "./Clicker";
import About from "./About";
import Awards from "./Awards";
import Projects from "./Projects";
import Contact from "./Contact";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
      <div>
        <ul>
          <li>
            <Link to="/">Clicker</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/awards">Awards</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" element={<Clicker />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route exact path="/awards" element={<Awards />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

// You can think of these components as "pages"
// in your app.