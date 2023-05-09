import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Your Logo Here
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator" className="nav-links">
              Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quotes" className="nav-links">
              Quotes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
