import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const NavBar = () => {

  return ( 
    <nav className="navbar">
      <Link className="btn" to='/'>Home</Link>
      <Link className="btn" to='/people'>People</Link>
      <Link className="btn" to='/planets'>Planets</Link>
    </nav>
  );
}

export default NavBar;