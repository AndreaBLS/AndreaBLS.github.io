import React from 'react'
import image1 from "../image/1.jpg"
import image2 from "../image/2.jpg"
import image3 from "../image/3.jpg"
import image4 from "../image/4.jpg"
import image5 from "../image/5.jpg"

export default function Artist(props) {
    console.log(props)
    return (
        
        <div>
            <h1>Artist</h1>
            <div className="ArtistImage">
            <img src={props.location.artistImage} alt="artist" />
            </div>
        </div>
    )
}
