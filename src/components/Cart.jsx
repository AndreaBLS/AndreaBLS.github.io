import React from "react";

export default function Cart({addedcartAlbums}) {
  return (
    <div>
      
      <div className="display">
        <h1>{addedcartAlbums&&addedcartAlbums.length}</h1>
      </div>
    </div>
  );
}
