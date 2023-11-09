import "./App.css";
import React from "react";
import images from "./assets/images/images";

function App() {
  return (
    <body>
      <header className="header">
        <a href="#">
          <img src={images.logo} className="logo" />
        </a>

        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">Quiénes somos</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>



      <section className="home-background">
        <div>
          <h1>Servicios Veterinarios Eläin</h1>
        </div>
      </section>
    </body>
  );
}

export default App;
