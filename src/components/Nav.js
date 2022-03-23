import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Math Magician</h1>
      <div className="links">
        <Link to="/">Home |</Link>
        <Link to="/Calculator">Calculator |</Link>
        <Link to="/Quote">Quote</Link>
      </div>
    </nav>
  );
}

export default Navbar;
