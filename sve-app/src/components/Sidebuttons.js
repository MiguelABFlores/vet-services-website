// Sidebuttons.jsx

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebuttons.css";

function Sidebuttons() {
  const [showButtons, setShowButtons] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButtons(true);
      scrollToSection();
      resetHideTimer(false);
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

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      // Oculta los botones después de hacer clic en una sección
      setShowButtons(false);
    }
  };

  let hideTimer;

  const hideButtonsAfterTimeout = () => {
    hideTimer = setTimeout(() => {
      setShowButtons(false);
    }, 1500); 
  };

  const resetHideTimer = () => {
    clearTimeout(hideTimer);
    hideButtonsAfterTimeout();
  };

  return (
    <div className={`side-buttons ${showButtons ? "show" : ""}`}>
      {showButtons && (
        <>
          <button
            className="sidebuttons"
            onClick={() => {
              scrollToSection("home");

            }}
          >
            Home
          </button>
          <button
            className="sidebuttons"
            onClick={() => {
              scrollToSection("about");

            }}
          >
            About
          </button>
          <button
            className="sidebuttons"
            onClick={() => {
              scrollToSection("services");

            }}
          >
            Services
          </button>
          <button
            className="sidebuttons"
            onClick={() => {
              scrollToSection("contact");

            }}
          >
            Contact
          </button>
          <button
            className={`icon menu-icon`}
            onClick={() => toggleButtons()}
          >
            {showButtons ? <FontAwesomeIcon icon={faTimes} /> : "☰"}
          </button>
        </>
      )}
    </div>
  );
}

export default Sidebuttons;
