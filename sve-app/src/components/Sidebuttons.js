import React, { useEffect, useState } from "react";
import "../styles/Sidebuttons.css";

function Sidebuttons() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
  };

  return (
    <div className={`side-buttons ${showButtons ? "show" : ""}`}>
      <button className="sidebuttons" onClick={() => scrollToSection("home")}>
        Home
      </button>
      <button className="sidebuttons" onClick={() => scrollToSection("about")}>
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
    </div>
  );
}

export default Sidebuttons;
