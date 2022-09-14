import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <>
    <div className="nav-container">

      <h1 className="title">Math Magicians</h1>

      <div>
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/calculator" className="nav-link">
          Calculator
        </Link>

        <Link to="/quotes" className="nav-link">
          Quotes
        </Link>
      </div>
    </div>
  </>
);

export default Navbar;
