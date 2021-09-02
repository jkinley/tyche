import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import _ from 'lodash';
import './index.scss';
import Loader from 'react-loader-spinner';
import Planet from './planet.js';
import { fetchPlanets } from '../../api/index.js';

const Planets = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [maxPages, setMaxPages] = React.useState(1);

  // const test = {
  //   "count": 0,
  //   "next": "https://swapi.dev/api/planets/?page=2",
  //   "previous": null,
  //   "results": []
  // }

  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    error,
    status,
    data,
    isFetching } = useQuery(
      ['planets', currentPage], 
      () => fetchPlanets(currentPage), 
      { keepPreviousData: true, staleTime: 5000 }
    );

  React.useEffect( () => {
    //const data = test;
    if (data?.results.length > 0 && data?.count > 0 ) {
      const temp = data?.count / data?.results.length;
      setMaxPages(temp);
    }

    
  }, [data, maxPages]);

  return (  
    <>
      <h1>Planets</h1>
      { isLoading && <Loading />}
      { isError && <Error error={error}/> }
      { status === 'success' && data?.count > 0 && (
        <div>
          <ButtonBar currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages} />
          <div className="content-grid">
            {_.map(data?.results, (planet) => {
                return (
                  <Planet key={planet.name} planet={planet} />
                );
              })}
          </div>
          <ButtonBar currentPage={currentPage} setCurrentPage={setCurrentPage} maxPages={maxPages}/>
        </div>)
      }
      { status === 'success' && data?.count === 0 && (
        <h3>No data available</h3>
      )}
    </>
  );
}

const ButtonBar = ({setCurrentPage, currentPage, maxPages, isFetching }) => {

  console.log(maxPages);
  return (
    <div className="button-bar">
      <button
        className="btn"
        disabled={currentPage === 1}
        onClick={ () => setCurrentPage((previous) => previous - 1)}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>

      <button
        className="btn"
        disabled={currentPage >= maxPages }
        onClick={ () => setCurrentPage((previous) => previous + 1) }
      >
        Next
      </button>
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