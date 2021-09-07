import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import People from './pages/people';
import Planets from './pages/planets';
import PlanetDetail from './pages/planet-detail';
import PeopleDetail from './pages/people-detail';

function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <div className="container">
            <Link className="btn" to='/'>
              <div className="logo">Star Wars</div>
            </Link>
          </div>
        </header>

        <main className="main">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/people">
                <People />
              </Route>
              <Route path="/people-detail/:personId">
                <PeopleDetail />
              </Route>
              <Route path="/planets">
                <Planets />
              </Route>
              <Route path="/planet-detail/:planetId">
                <PlanetDetail />
              </Route>
            </Switch>
          </div>
        </main>

        <footer className="footer">
          <div>
            <small>Copyright &copy; {new Date().getFullYear()} Gizmo Creations. </small>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;