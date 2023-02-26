import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from 'react';
import { render } from "react-dom";
import Clicker from "./Clicker";
import About from "./About/About";
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

export default function App() {
  return (
    <div>
      <Clicker />
      <About />
      <Awards />
      <Projects />
      <Contact />
    </div>
  );
}

// You can think of these components as "pages"
// in your app.