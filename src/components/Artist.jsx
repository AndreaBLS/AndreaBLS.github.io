import React from 'react'


export default function Artist(props) {
    console.log(props)
    return (
        
        <div>
            <h1>Artist</h1>
            <div className="ArtistImage">
            {<img src={props.location.artistImage} alt="artist" />}
            </div>
            <h1></h1>
        </div>
    )
}
