import React from 'react';
import { useQuery } from 'react-query';
import _ from 'lodash';
import '../index.scss';
import Loader from 'react-loader-spinner';
import Person from '../components/person.js';
import { fetchPeople } from '../api/index.js';
import { Link } from 'react-router-dom';

const People = () => {
  const {data, status} = useQuery('people', fetchPeople);

  return (  
    <>
    <Link to="/">Home</Link>
    <h1>People</h1>
    { status === 'loading' && ( 
      <Loader type="Puff" color="#4e6269" height={100} width={100} className="loading-wrap"/>
      )
    }
    { status === 'error' && ( <div>Error loading data... </div> )}
    { status === 'success' && (
      <div className="content-grid">
        {_.map(data.results, (person, i) => {
            return (
              <Person key={i} personId={i + 1} person={person} />
            );
          })}
      </div>
    )}
    </>
  );
}

export default People;