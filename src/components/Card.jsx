import React from "react";
import { Link } from "react-router-dom";

export default function ({image}) {
  return (
    <div className="card">
      <div className="image">
        <Link to="/artist">
          <img src={image} alt="image" />
        </Link>
      </div>

      <div className="content">
        <p></p>
      </div>
    </div>
  );
}
