import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Artist from "./components/Artist";
import Card from "./components/Card";


import "./App.scss";

export default class App extends React.Component {
  
 
  render(){
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header className="App-header">  
        <Switch>  
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />     
          <Route exact path="/artist" component={Artist} />
        </Switch>
        </header>
        
      </div>
    </Router>
  );
}
}


