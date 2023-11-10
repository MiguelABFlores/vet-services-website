import React from "react";
import { Link } from "react-router-dom";
import images from '../assets/images/images';
import '../components/Navbar.css';

function Navbar() {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img src={images.logo} className="logo" alt="SVE-logo" />
        </Link>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">Quiénes somos</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
