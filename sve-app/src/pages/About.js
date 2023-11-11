import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section class="about" id="about">
      <div class="about-content">
        <div class="about-img">
          <img id = "aboutImg" alt="animales domesticos" />
        </div>

        <div class="about-text">
          <h2 class="title-about">Sobre nosotros</h2>
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
