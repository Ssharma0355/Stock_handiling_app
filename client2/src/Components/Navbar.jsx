import React from 'react';
import './Navbar.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">Stalk The Stock !</h1>
                <ul className="nav-links">
                    <li><a href='/'>Home</a></li> 
                    <li><a href='/stocks'>Today's Stock</a></li> 
                    <li><a href='/login'>Login/Sign Up</a></li> 


                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
