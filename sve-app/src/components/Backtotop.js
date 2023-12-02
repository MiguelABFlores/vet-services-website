import React from "react";
import "../styles/Backtotop.css";
import { useEffect, useState } from "react";

function Backtotop() {
  const [backtotopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backtotopButton && (
        <button
          className="scrollup"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            height: "40px",
            fontSize: "40px",
          }}
          onClick={scrollUp}
        >
          ^
        </button>
      )}
    </div>
  );
}

export default Backtotop;
