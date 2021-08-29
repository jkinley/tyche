import React from 'react';

const Planet = ({planet}) => {
  return ( 
    <div className="card">
      <h2>{planet.name}</h2>
      <ul>
        <li>Climate: {planet.climate} </li>
        <li>Terrain: {planet.terrain} </li>
      </ul>
    </div>
   );
}
 
export default Planet;