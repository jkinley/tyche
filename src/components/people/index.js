import React from 'react';
import { useQuery } from 'react-query';
import _ from 'lodash';
import './index.scss';
import Loader from 'react-loader-spinner';
import Person from './person.js';
import { fetchPeople } from '../../api/index.js';


const People = () => {
  const {data, status} = useQuery('people', fetchPeople);

  return (  
    <>
    <h1>People</h1>
    { status === 'loading' && ( 
      <Loader type="Puff" color="#4e6269" height={100} width={100} className="loading-wrap"/>
      )
    }
    { status === 'error' && ( <div>Error loading data... </div> )}
    { status === 'success' && (
      <div className="content-grid">
        {_.map(data.results, (person) => {
            return (
              <Person key={person.name} person={person} />
            );
          })}
      </div>
    )}
    </>
  );
}

export default People;