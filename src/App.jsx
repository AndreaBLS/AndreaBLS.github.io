import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Artist from "./components/Artist";
import "./App.scss";

export default class App extends Component {
  state = {
    amount: 0,
  };
  increment = () => {
    this.setState(this.state.amount + 1);
  };

  render() {
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
            <Cart amount={this.state.amount} 
            incrementProps={this.increment}/>
            {/* <Artist amount={this.state.amount} 
            incrementProps={this.increment}/> */}

          </header>
        </div>
      </Router>
    );
  }
}
