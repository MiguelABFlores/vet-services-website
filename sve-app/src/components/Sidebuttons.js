import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Sidebuttons.css";

function Sidebuttons() {
  const [showButtons, setShowButtons] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });

      // Oculta el menú después de hacer clic en una sección
      closeMenu();
    }
  };

  return (
    <div className={`container ${showButtons ? "show" : ""}`}>
      {showButtons && (
        <>
          <div className={`sidebuttons ${isMenuOpen ? "show" : ""}`}>
            <a href="#home" className="sections" onClick={() => scrollToSection("home")}>
              Home
            </a>
            <a href="#about" className="sections" onClick={() => scrollToSection("about")}>
              About
            </a>
            <a href="#services" className="sections" onClick={() => scrollToSection("services")}>
              Servicios
            </a>
            <a href="#contact" className="sections" onClick={() => scrollToSection("contact")}>
              Contacto
            </a>
          </div>
          <div className="icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </>
      )}
    </div>
  );
}

export default Sidebuttons;
