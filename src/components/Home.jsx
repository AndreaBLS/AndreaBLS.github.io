import React from 'react'
import Card from"./Card";
import image1 from "../image/1.jpg"
import image2 from "../image/2.jpg"
import image3 from "../image/3.jpg"
import image4 from "../image/4.jpg"
import image5 from "../image/5.jpg"

export default function Home() {
    
    const images = [image1, image2, image3, image4, image5]
      
    return (
        <div>
            <h1>Quantum Records</h1>
            {images.map((item)=>{
                return(<Card key={item} image={item}/>)
            })}
        </div>
    )
}
