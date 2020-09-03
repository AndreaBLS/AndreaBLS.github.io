import React from "react";

export default function Cart({ addedcartAlbums, deleteItem, total, deletePrices}  ) {
  console.log(addedcartAlbums);
  return (
    <div>
      <div className="displayCart">
        <h1>Total Items {addedcartAlbums && addedcartAlbums.length}</h1>
        <h2>Total {total}</h2>
        <div className="cartHeaderContainer">
          <h2>Album Artist</h2>
          <h2>Album Name</h2>
          <h2>Album Year</h2>
          <h2>Album Price</h2>
          <h2>album image</h2>
        </div>

        {addedcartAlbums.map((item) => {
          return (
            <div className="albumContainerArtist">
              <h2>{item.albumArtist} </h2>
              <h2>{item.albumName}</h2>
              <h2>{item.albumYear}</h2>
              <h2>{item.albumPrice} €</h2>
              <button
                className="removeBtn"
                onClick={() => {deleteItem(item.albumName);deletePrices()}}
              >
                <h2>Remove</h2>
              </button>
              <div className="cartAlbumContainer">
                <img src={item.albumImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
