import React from "react";
import { Link } from "react-router-dom";
import images from '../assets/images/images';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img src={images.logo} className="logo" alt="SVE-logo" />
        </Link>

        <div className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/about'>Quienes somos</Link>
          <Link to='/services'>Servicios</Link>
          <Link to='/contact'>Contactanos</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
