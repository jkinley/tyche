import React from 'react';
import { Link } from 'react-router-dom';

const Planet = ({planet, planetId}) => {
  return ( 
    <div className="card">
      <h2>{planet.name}</h2>
      <Link to={`/planet-detail/${planetId}`}>View Details</Link>
    </div>
   );
}
 
export default Planet;