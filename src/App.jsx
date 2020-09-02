import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Artist from "./components/Artist";
import Data from "./data/data2.json";
import Card from "./components/Card"
import "./App.scss";



export default class App extends Component {

  state={
    artistData:Data
  }


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
        </header>
        {this.state.artistData.map((item)=>{
          return(
            <Card key={item.id} name={item.name} />
          )
        })}
        
      </div>
    </Router>
    )
  }
}




