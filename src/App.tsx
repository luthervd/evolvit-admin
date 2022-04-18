import React from 'react';
import  ContentEdit  from './features/content-edit/ContentEdit';
import './App.css';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <section className="section">
    <div className="container">
      <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-brand">
          <a className="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
          </a>
      </div>
        <div className="navbar-start">
          <Link className="navbar-item" to="/content-edit">Content Editor</Link>
          <Link  className="navbar-item" to="/content">Content</Link>
        </div>
      </div>
      </nav>
      <Outlet />
    </div>
    </section>

  );
}

export default App;
