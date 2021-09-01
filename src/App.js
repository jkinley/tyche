import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/index.js';
import Home from './pages/home';
import People from './components/people';
import Planets from './components/planets';

function App() {
  return (
    <>
      <div className="App">
        <header className="header">
          <div className="container">
            <div className="logo">Star Wars Info</div>
            <NavBar />
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
              <Route path="/planets">
                <Planets />
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