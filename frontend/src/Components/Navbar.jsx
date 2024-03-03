import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (<nav className="navbar" > <div className="logo" >Fetch IT</div>
   <ul className="nav-links" > <Link to={"/Profile"}>DashBoard</Link>
   <li><a href="#" >Latest Stocks</a></li> <li><a href="#" >BSE</a></li>
    </ul> 
    </nav>);
}

export default Navbar;