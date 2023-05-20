import React from 'react';
import Main from './components/Main/Main';
import {Nav} from './nav'
import NavProvider from './context/NavContext';
import './App.css'
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  console.log("App")
  return (
    <div className='appContainer'>
      <NavProvider>
        <Nav/>
        <Main/>
      </NavProvider>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.