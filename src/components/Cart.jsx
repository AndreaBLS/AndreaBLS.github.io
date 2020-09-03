import React from "react";

export default function Cart({ addedcartAlbums }) {
  console.log(addedcartAlbums);
  console.log();
  return (
    <div>
      <div className="display">
        <h1>{addedcartAlbums && addedcartAlbums.length}</h1>
          {addedcartAlbums.map((item) => {

            return (
              <div className="albumContainer">
              <h2>Album Artist</h2>
              
              <h2>{item.albumArtist} </h2>
              <h2>{item.albumName}</h2>
              <h2>{item.albumYear}</h2>
              <h2>{item.albumPrice} €</h2>
              <div className="cartAlbumContainer">
              <img src={item.albumImage} alt=""/>
              </div>
              </div>
            )
            

            
          })}
      </div>
    </div>
  );
}
