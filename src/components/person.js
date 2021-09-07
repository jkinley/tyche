import React from 'react';
import { Link } from 'react-router-dom';

const Person = ({person, personId}) => {
  return ( 
    <div className="card">
      <h2>{person.name}</h2>
      <Link to={`/people-detail/${personId}`}>View Details</Link>
    </div>
  );
}

export default Person;