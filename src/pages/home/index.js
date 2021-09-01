import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return ( 
    <>
      <h1>Home</h1>
      <div className="home-buttons">    
        <Link to="/people">
          <button className="btn">People</button>
        </Link>
        <Link to="/planets">
          <button className="btn">Planets</button>
        </Link>
    
      </div>
    </>
   );
};

export default Home;