import React from "react";
import "../styles/About.css";
import images from "../assets/images/images";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-img">
          <img src={images.aboutImg} alt="animales domesticos" />
        </div>

        <div className="about-text">
          <h2 className="title-about">Sobre Nosotros</h2>
          <p>
            En Servicios Veterinarios Eläin entendemos que la comidad de tus
            mascotas es una prioridad. Por eso, Ofrecemos servicios veterinarios
            a domiciolio bajo cita previa.
          </p>
          <p>
            Nuestro equipo de veterinarios altamente calificados está listo para
            atender a sus mascotas en la comodidad de tu hogar.
          </p>
        </div>
      </div>
    </section>  
  );
}

export default About;
