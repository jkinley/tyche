import React from 'react';
import { useQuery } from 'react-query';
import _ from 'lodash';
import './index.scss';
import Loader from 'react-loader-spinner';
import Planet from './planet';

// const fetchPlanets = async (key, page) => {
//   const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
//   return res.json();
// };

const Planets = () => {
  const [page, setPage] = React.useState(1);

  const fetchPlanets = (page = 1) => fetch(`https://swapi.dev/api/planets/?page=${page}`)
  .then((res) => res.json());

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData} = useQuery(['planets', page], () => fetchPlanets(page), {keepPreviousData: true});
  
  console.log(data);
  return (  
    <>
      <h1>Planets</h1>

      { isLoading ? ( 
        <Loader type="Puff" color="#00BFFF" height={100} width={100} className="loading-wrap"/>
      ) : isError ? (
        <div>Error loading data...</div>
      ) : (
        <div className="content-grid">
          {_.map(data.results, (planet) => {
              return (
                <Planet key={planet.name} planet={planet} />
              );
            })}
        </div>
      )}

      {/* {isFetching ? <span> Fetching data...</span> : null}{' '} */}
    </>
  );
}

export default Planets;