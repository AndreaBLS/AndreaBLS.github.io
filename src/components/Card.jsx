import React from "react";
import { Link } from "react-router-dom";



export default function Card ({ image, name }) {
console.log(image)
  return (
    <div className="card">
      <div className="image">
        <Link to={{ pathname: "/artist", artistImage: image }}>
          <div className="ArtistImage">
            <img src={image}  alt="imag44e" />
          </div>
        </Link>
      </div>

      <div className="content">
        <h1>{name}</h1>
        <p></p>
      </div>
    </div>
  );
}
