import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section class="contact" id="contact">
      <div class="contact-content">
        <div class="contact-info">
          <h2>Contacto</h2>
          <p>¿Tienes una duda o pregunta?</p>
          <p>¡Mándanos mensaje en unas de nuestras redes sociales!</p>
          <a
            href="https://www.instagram.com/svelain/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp"/>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=523317654147"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp"/>
          </a>
        </div>

        <div class="contact-image">
          {/* Add your contact image content here */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
