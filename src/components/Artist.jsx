import React from "react";

export default function Artist(props) {
  return (
    <div>
      <h1>Artist</h1>
      <div className="ArtistImage">
        <img src={props.location.artistData.image} alt="artist" />
      </div>
      <h1>{props.location.artistData.name}</h1>
      <p>{props.location.artistData.bio}</p>
      
    </div>
  );
}
