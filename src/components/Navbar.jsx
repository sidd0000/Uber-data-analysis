

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="logo">Uber Data Analysis</h1>
    <ul className="nav-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/forecasting">Forecasting</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navbar;
