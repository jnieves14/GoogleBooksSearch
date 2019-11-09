import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './pages/Home.component';
import { Saved } from './pages/Saved.component';
import { NoMatch } from './page/NoMatch.component';


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
