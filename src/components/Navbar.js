import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import Play from './Play';




export default function Navbar() {
  return (
    <Router>
    <h1>DigiToox Music</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/play">Play</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
        </Switch>
      </nav>
    </Router>
  );
}







function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
