import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import _ from 'lodash';
import './index.scss';
import Loader from 'react-loader-spinner';
import Planet from './planet';

const fetchPlanets = (pageNum) => fetch(`https://swapi.dev/api/planets/?page=${pageNum}`)
  .then((res) => res.json());



const Planets = () => {
  const [currentPage, setCurrentPage] = React.useState(2);
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

  const count = data?.count;
  const pageLength = data?.results.length;
  const maxPages = count / pageLength;

  React.useEffect( () => {
    if (currentPage < maxPages) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery(['planets', nextPage], () => fetchPlanets(nextPage));
    }
  }, [data, currentPage, queryClient, maxPages]);

  return (  
    <>
      <h1>Planets</h1>
      { isLoading && <Loading />}
      { isError && <Error error={error}/> }
      { status === 'success' && (
        <div>
          <ButtonBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

          <div className="content-grid">
            {_.map(data.results, (planet) => {
                return (
                  <Planet key={planet.name} planet={planet} />
                );
              })}
          </div>

          <ButtonBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      )}
    </>
  );
}

const ButtonBar = ({setCurrentPage, currentPage, maxPages }) => {

  console.log(maxPages)
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