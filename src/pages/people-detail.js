import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPeopleById } from '../api';
import { Link } from 'react-router-dom';

const PeopleDetail = () => {
  const { personId } = useParams();

  const {
    data,
    isSuccess,
    isLoading,
    isError
    } = useQuery(
      ['people', personId], 
      () => fetchPeopleById(personId), 
      { keepPreviousData: true, staleTime: Infinity }
    );

  
  return ( 
    <section className="container">

      { isSuccess && (
        <>
          <Link to="/people">Back</Link>
          <h1>{data?.name}</h1>

          <p>Height: {data?.height}</p>
        </>
      )}
    </section>
   );
}
 
export default PeopleDetail;