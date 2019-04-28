import React, { Component } from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

import Epl from "./components/Epl";
import Sll from "./components/Sll";
import Isa from "./components/Isa";

class App extends Component {
  render() {
    return (
      <div>
        {/* navigation */}
        <ul className="nav nav-pills">
          <li className="nav-link" role="presentation"><Link to="/epl">English Premier League</Link></li>
          <li className="nav-link" role="presentation"><Link to="/laliga">Spanish La Liga</Link></li>
          <li className="nav-link" role="presentation"><Link to="/seriea">Italian Serie A</Link></li>
        </ul>

        {/* content */}
        <Switch>
          <Route path="/epl" component={Epl} />
          <Route path="/laliga" component={Sll} />
          <Route path="/seriea" component={Isa} />
        </Switch>
      </div>
    );
  }
}

export default App;

