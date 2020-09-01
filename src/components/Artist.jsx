import React from 'react'


export default function Artist(props) {
    console.log(props)
    return (
        
        <div>
            <h1>Artist</h1>
            <img src={props.location.artistImage} alt="artist" />
        </div>
    )
}
