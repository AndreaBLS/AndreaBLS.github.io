import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import Cart from "./components/Cart"
import './App.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
