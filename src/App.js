import React from 'react';
import NavBar from './components/navbar';
import Planets from './components/planets';
import People from './components/people';
import _ from 'lodash';

function App() {
  const [page, setPage] = React.useState('planets');

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Tyche</h1>
          <NavBar setPage={setPage} />
        </div>
      </header>
      
      <main className="main">
        <div className="container">
        { page === 'planets' ? <Planets /> : <People />}
        </div>
      </main>
      <footer className="footer">
        <div>
          <small>Copyright &copy; {new Date().getFullYear()} Gizmo Creations. </small>
        </div>
      </footer>
    </div>
  );
}

export default App;
