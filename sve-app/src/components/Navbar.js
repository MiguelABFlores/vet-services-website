import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importa los íconos necesarios
import images from "../assets/images/images";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <a href="#home">
        <img src={images.logo} className="logo" alt="SVE-logo" />
      </a>

      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <a href="#home" className="active" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          Quienes somos
        </a>
        <a href="#services" onClick={closeMenu}>
          Servicios
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contactanos
        </a>

        <div className="mobile" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
