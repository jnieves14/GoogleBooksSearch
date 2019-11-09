import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './pages/Homepage';
import { Saved } from './pages/Saved';
import { NoMatch } from './pages/NoMatch';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
  );
}

export default App;
