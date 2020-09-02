import React from "react";

export default function Artist(props, amount, incrementProps) {
  return (
    <div>
      <h2>{props.location.artistData.name}</h2>

      <div className="artistBigContainer">
        <div className="artistImage2">
          <img src={props.location.artistData.image} alt="artist" />
        </div>

        <div className="bioContainer">
          <p>{props.location.artistData.bio}</p>
        </div>
      </div>
      <div className="albumContainer">
        <div>
          <h3>
            Album Name: {props.location.artistData.albums.album1.albumName}
          </h3>
          <h3>Price: {props.location.artistData.albums.album1.albumPrice}€</h3>
          <h3>
            Release Year: {props.location.artistData.albums.album1.albumYear}
          </h3>
          <div className="albumImage">
          <img src={props.location.artistData.albums.album1.albumImage}></img>
          </div>
          <button className="button" onClick="">
            <h3>Add to Cart</h3>
          </button>
        </div>
        

        <div>
          <h3>
            Album Name: {props.location.artistData.albums.album2.albumName}
          </h3>
          <h3>Price: {props.location.artistData.albums.album2.albumPrice}€</h3>
          <h3>
            Release Year: {props.location.artistData.albums.album2.albumYear}
          </h3>
          <div className="albumImage">
          <img src={props.location.artistData.albums.album2.albumImage}></img>
          </div>
          <button className="button" onClick="">
            <h3>Add to Cart</h3>
          </button>
        </div>

        <div>
          <h3>
            Album Name: {props.location.artistData.albums.album3.albumName}
          </h3>
          <h3>Price: {props.location.artistData.albums.album3.albumPrice}€</h3>
          <h3>
            Release Year: {props.location.artistData.albums.album3.albumYear}
          </h3>
          <div className="albumImage">
          <img src={props.location.artistData.albums.album3.albumImage}></img>
          </div>
          <button className="button" onClick="">
            <h3>Add to Cart</h3>
          </button>
        </div>
      </div>
    </div>
  );
}
