// Sidebuttons.jsx

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebuttons.css";

function Sidebuttons() {
  const [showButtons, setShowButtons] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButtons(true);
      resetHideTimer();
    } else {
      setShowButtons(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }

    // Oculta los botones después de hacer clic en una sección
    hideButtonsAfterTimeout();
  };

  let hideTimer;

  const hideButtonsAfterTimeout = () => {
    hideTimer = setTimeout(() => {
      setShowButtons(false);
    }, 2000); // 3000 milisegundos = 3 segundos (ajusta según sea necesario)
  };

  const resetHideTimer = () => {
    clearTimeout(hideTimer);
    hideButtonsAfterTimeout();
  };

  return (
    <div className={`side-buttons ${showButtons ? "show" : ""}`}>
      <button
        className={`sidebuttons menu-icon ${showButtons ? "hide" : ""}`}
        onClick={() => setShowButtons(!showButtons)}
      >
        {showButtons ? <FontAwesomeIcon icon={faTimes} /> : "☰"}
      </button>
      {showButtons && (
        <>
          <button
            className="sidebuttons"
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className="sidebuttons"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="sidebuttons"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button
            className="sidebuttons"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </>
      )}
    </div>
  );
}

export default Sidebuttons;
