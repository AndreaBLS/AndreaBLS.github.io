import React from "react";

export default function Artist(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.location.artistData && props.location.artistData.name}</h2>

      <div className="artistBigContainer">
        <div className="artistImage2">
          <img
            src={props.location.artistData && props.location.artistData.image}
            alt="artist"
          />
        </div>

        <div className="bioContainer">
          <p>{props.location.artistData && props.location.artistData.bio}</p>
        </div>
      </div>
      <div className="albumContainer">
        {props.location.artistData &&
          props.location.artistData.albums.map((album) => {
            return (
              <div key={album.albumName}>
                <h3>Album Name: {album.albumName}</h3>
                <h3>Price: {album.albumPrice}€</h3>
                <h3>Release Year: {album.albumYear}</h3>
                <div className="albumImage">
                  <img src={album.albumImage}></img>
                </div>
                <button 
                className="button"
                 onClick={() => props.AddItem(album)}
                >
                  <h3>Add to Cart</h3>
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
