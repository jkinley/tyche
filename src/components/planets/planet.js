import React from 'react';
import { Link } from 'react-router-dom';

const Planet = ({planet, id}) => {
  return ( 
    <div className="card">
      <h2>{planet.name}</h2>
      <Link to={`/planet-detail/${id}`}>View Details</Link>
    </div>
   );
}
 
export default Planet;