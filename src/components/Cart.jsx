import React from "react";

export default function Cart({
  addedcartAlbums,
  deleteItem,
  resetCart,
  updatePrices,
  total,
}) {
  return (
    <div>
      <div className="displayCart">
        <h1>Total Items In Cart {addedcartAlbums && addedcartAlbums.length}</h1>
        <h2>Total Price {total} € </h2>
        <button onClick={() => resetCart()}>RESET CART</button>
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
                onClick={() => {
                  deleteItem(item.albumName);
                  updatePrices(item.albumPrice);
                }}
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
