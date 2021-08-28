import React from 'react';
import './index.scss';

const NavBar = ({setPage}) => {

  return ( 
    <nav className="navbar">
      <button className="btn" onClick={() => setPage('planets')}>Planets</button>
      <button className="btn" onClick={() => setPage('people')}>People</button>
    </nav>
  );
}
 
export default NavBar;