import React from "react";
import { Link } from "react-router-dom";


export default function ({image}) {

  return (
    
    <div className="card">
      <div className="image">
        <Link to={{pathname:"/artist",artistImage:image}}>
          <div className="ArtistImage">
          <img src= {image} alt="image" />
          </div>
        </Link>
      </div>

      <div className="content">
        <p></p>
      </div>
    </div>
  );
}
