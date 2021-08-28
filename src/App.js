import React from 'react';
import NavBar from './components/navbar';
import Planets from './components/planets';
import People from './components/people';

function App() {
  const [page, setPage] = React.useState('planets');

  return (
    <div className="App">
      <h1>Tyche</h1>
      <NavBar setPage={setPage} />

      <div className="content">
        { page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
