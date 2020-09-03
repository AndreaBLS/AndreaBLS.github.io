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
    addedcartAlbums: [],
    total: 0,
  };

  addPrices = () => {
    this.state.addedcartAlbums.map((item) => {
      this.state.total = this.state.total + item.albumPrice;

    });
  };
  deletePrices= (albumPrice)=>{
    const updatePrices = this.state.addedcartAlbums.filter(
      (item) => item.albumPrice !== albumPrice
    );
    this.setState({
      albumPrice: updatePrices
    })
    

  }

  deleteItem = (albumName) => {
    const updatedItems = this.state.addedcartAlbums.filter(
      (item) => item.albumName !== albumName
    );
    this.setState({
      addedcartAlbums: updatedItems,
    });
  };

  AddItem = (albumName) => {
    console.log(albumName);
    this.setState({
      addedcartAlbums: [...this.state.addedcartAlbums, albumName],
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <header className="App-header">
            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/cart"
                render={(props) => (
                  <Cart
                    {...props}
                    addedcartAlbums={this.state.addedcartAlbums}
                    deleteItem={this.deleteItem}
                    deletePrices={this.deletePrices}
                    total={this.state.total}
                  />
                )}
              />

              <Route
                exact
                path="/artist"
                render={(props) => (
                  <Artist
                    {...props}
                    AddItem={this.AddItem}
                    addPrices={this.addPrices}
                  />
                )}
              />
            </Switch>
          </header>
        </div>
      </Router>
    );
  }
}
