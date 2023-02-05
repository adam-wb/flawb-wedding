import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Venue from "./components/Venue";
import Accomodation from "./components/Accomodation";
import About from "./components/About";
import Schedule from "./components/Schedule";
import PageNotFound from "./components/PageNotFound";
import Paths from "./helpers/paths";
import Gifts from "./components/Gifts";

import "./App.css";

const App = () => {
  return (
    <div id="App">
      <NavBar />
      <div id="Main">
        <Switch>
          <Route exact path={Paths.HOME} component={Home} />
          <Route path={Paths.VENUE} component={Venue} />
          <Route path={Paths.ACCOMODATION} component={Accomodation} />
          <Route path={Paths.SCHEDULE} component={Schedule} />
          <Route path={Paths.ABOUT_US} component={About} />
          <Route path={Paths.GIFTS} component={Gifts} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
