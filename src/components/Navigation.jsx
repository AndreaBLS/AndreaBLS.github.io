import React from 'react'
import logo from "../images/logo.jpg"
import {Link} from "react-router-dom"
export default function Navigation() {
    return (
        <div className="NavContainer">
            <nav>
                <Link to="/">
                <div><div>Home</div></div>
                </Link>
                
                <img className="logo" src={logo} alt="logo"/>
                
                <Link to="/cart">
                <div><div>Cart</div></div>
                </Link>
            </nav>   
        </div>
    )
}
