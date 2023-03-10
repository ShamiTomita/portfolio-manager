import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from 'react';
import { render } from "react-dom";
import Clicker from "./Clicker/Clicker";
import Home from "./Home/Home";
import About from "./About/About";
import Awards from "./Awards/Awards";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Navbar from "./Navbar/Navbar";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <div>
      <Navbar />
      <div class="main">
      <Clicker />
      <Home />
      <About />
      <Awards />
      <Projects />
      <Contact />
      </div>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.