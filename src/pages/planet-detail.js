import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPlanetById } from '../api';
import { Link } from 'react-router-dom';

const PlanetDetail = () => {
  const { planetId } = useParams();

  const {
    data,
    isSuccess,
    isLoading,
    isError
    } = useQuery(
      ['planets', planetId], 
      () => fetchPlanetById(planetId), 
      { keepPreviousData: true, staleTime: 5000 }
    );
  
    console.log(data);

  return ( 
    <section className="container">
      {/* { isLoading && ( <div>Loading...</div>)} 
      { isError && ( <div>Error loading data...</div>)} */}
      { isSuccess && (
        <>
          <Link to="/planets">Back</Link>
          <h1>{data?.name}</h1>
          <ul>
            <li>Climate: {data?.climate}</li>
            <li>Diameter: {data?.diameter}</li>
            <li>Gravity: {data?.gravity}</li>
            <li>Orbital Period: {data?.orbital_period}</li>
            <li>Rotation Period: {data?.rotation_period}</li>
            <li>Population: {data?.population}</li>
          </ul>
        </>
      )}
    </section>
   );
}
 
export default PlanetDetail;