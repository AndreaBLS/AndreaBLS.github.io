import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Card from "./components/Card";
import Artist from "./components/Artist";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header className="App-header">  
        <Switch>  
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />     
          <Route path="/artist" component={Artist} />
        </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
