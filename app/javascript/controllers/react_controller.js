import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App";
import { BrowserRouter as Router } from "react-router-dom";
import '../src/index.css'
// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React controller connected");
    const app = document.getElementById("app");
    createRoot(app).render(
      <Router>
        <App />
      </Router>
    );
  }
}