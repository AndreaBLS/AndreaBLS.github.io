import React, { Component } from 'react'
import Card from"./Card";
import Data from "../data/data2.json";




export default class Home extends Component {

    
    render() {
        const artistData=Data
    return (
        <div>
            <h1>Quantum Records</h1>
            
             {artistData.map((item)=>{
          return(<Card key={item.id} name={item.name} image={item.image} bio={item.bio} albums={item.albums}/>)
        })}

        </div>
    )
    }
}