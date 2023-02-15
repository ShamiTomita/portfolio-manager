import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from 'react';
import { render } from "react-dom";
import Clicker from "./Clicker";

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
            <Link to="/dashboard">Dashboard</Link>
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
      </div>
  );
}

// You can think of these components as "pages"
// in your app.