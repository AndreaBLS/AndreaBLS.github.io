import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Artist from "./components/Artist";
import Card from "./components/Card"

import "./App.scss";

export default class App extends React.Component {
  state={ 
    images:[
    { id:"1.jpg"},
    { id:"2.jpg"},
    { id:"3.jpg"},
    { id:"4.jpg"},
    { id:"5.jpg"}
  ]
  }
 
  render(){
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
        <div className="cards">
        {this.state.images.map((item)=>{
          return(<Card key ={item} image={item.id}/>)
    
  })}
  </div>
      </div>
    </Router>
  );
}
}


