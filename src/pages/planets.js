import React from 'react';
import { useQuery } from 'react-query';
import _ from 'lodash';
import '../index.scss';
import Loader from 'react-loader-spinner';
import Planet from '../components/planet.js';
import { fetchPlanets } from '../api/index.js';
import { Link } from 'react-router-dom';

const Planets = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const { isLoading, isError, isSuccess, error, data, isPreviousData } = useQuery (
    ['planets', currentPage], 
    () => fetchPlanets(currentPage), 
    { keepPreviousData: true, staleTime: Infinity }
  );

  return (  
    <>
      <Link to="/">Home</Link>
      <h1>Planets</h1>
      { !isSuccess && isLoading && <Loading />}
      { !isSuccess && isError && <Error error={error}/> }
      
      { isSuccess && data?.count > 0 && (
        <div>
          
          <ButtonBar currentPage={currentPage} setCurrentPage={setCurrentPage}  data={data} isPreviousData={isPreviousData} />
          <div className="content-grid">
            {_.map(data?.results, (planet, i) => {
                return (
                  <Planet key={i} planetId={i + 1} planet={planet} />
                );
              })}
          </div>
          <ButtonBar currentPage={currentPage} setCurrentPage={setCurrentPage}  data={data}/>
        </div>)
      }
      
      { isSuccess && data?.count === 0 && (
        <h3>No data available</h3>
      )}
    </>
  );
}

const ButtonBar = ({setCurrentPage, currentPage, isFetching, isPreviousData, data }) => {
  return (
    <div className="button-bar">
      <button
        className="btn"
        onClick={ () => setCurrentPage(prev => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >Previous</button>
      <span>Page {currentPage}</span>

      <button
        className="btn"
        onClick={ () => setCurrentPage(prev => (isPreviousData || !data?.next ? prev : prev + 1)) }
        disabled={isPreviousData || !data?.next}
      >Next</button>
    </div>
  )
};

const Loading = () => (
  <Loader 
    type="Puff" 
    color="#00BFFF" 
    height={100} 
    width={100} 
    className="loading-wrap"
  />
);

const Error = ({error}) => (
  <div>
    <h3>Error loading data...</h3>
    <p>Error: {error.message}</p>
  </div>
)

export default Planets;