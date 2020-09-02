import React from "react";
import { Link } from "react-router-dom";



export default function Card ({ image, name, bio, albums }) {
console.log(image)
  return (
    <div className="card">
      
      <h2>{name}</h2>
        <Link to={{ pathname: "/artist", artistData:{image,bio,name,albums }, }}>
          <div className="artistImage">
            <img src={image}  alt="imag44e" />
          </div>
        </Link>
     

      <div className="content">
        
        <p></p>
      </div>
    </div>
  );
}
