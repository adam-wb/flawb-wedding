import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Venue from './components/Venue';
import Accomodation from './components/Accomodation';
import Rsvp from './components/Rsvp';
import PageNotFound from './components/PageNotFound';
import Paths from './helpers/paths';

import './App.css';

const isUnderConstruction = true;

const App = () => {
  return (
    <div className="App">
      <NavBar />
      { isUnderConstruction && <h1>Under construction</h1> }
      { !isUnderConstruction && <div className="Main">
        <Switch>
            <Route exact path={Paths.HOME} component={Home} />
            <Route path={Paths.VENUE} component={Venue} />
            <Route path={Paths.ACCOMODATION} component={Accomodation} />
            <Route path={Paths.RSVP} component={Rsvp} />
            <Route component={PageNotFound} />
        </Switch>
      </div>
      }
    </div>
  ) 
}

export default App;
