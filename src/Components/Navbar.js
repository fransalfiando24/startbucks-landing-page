import React from 'react'
import logo from '../images/logo.png'
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <a href="#"><img src={logo} className='logo'/></a>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">What's New</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
