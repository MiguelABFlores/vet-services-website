import React from "react";
import images from "../assets/images/images";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="header">
        <a href="#home">
          <img src={images.logo} className="logo" alt="SVE-logo" />
        </a>

        <nav className="navbar">
          <a href="#home" to="/">
            Home
          </a>
          <a href="#about">Quienes somos</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contactanos</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
