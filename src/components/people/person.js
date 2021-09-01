import React from 'react';

const Person = ({person}) => {
  return ( 
    <div className="card">
      <h2>{person.name}</h2>
      <ul>
        <li>Hair color: {person.hair_color} </li>
        <li>Height: {person.height} </li>
      </ul>
    </div>
  );
}

export default Person;