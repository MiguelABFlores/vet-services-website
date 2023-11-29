import React from "react";
import "../styles/Footer.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="sb__footer sb__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>Servicios</h4>
            <a href="#home">
              <p>Inicio</p>
            </a>
            <a href="#about">
              <p>Quiénes Somos</p>
            </a>
            <a href="#services">
              <p>Servicios</p>
            </a>
            <a href="#contact">
              <p>Contáctanos</p>
            </a>
          </div>

          <div className="sb__footer-links-div">
            <h4>Teléfono</h4>
            <p className="phone">+(52) 331 765 4147</p>
          </div>

          <div className="sb__footer-links-div">
            <h4>Social Media</h4>
            <div className="socialmedia">
              <a
                href="https://www.instagram.com/svelain/"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{ color: "#b1dce2" }} />
              </a>
              <a
                href="https://wa.me/5213317654147"
                rel="noopener noreferrer"
                className="icons"
              >
                <FaWhatsapp style={{ color: "#b1dce2" }} />
              </a>
            </div>
          </div>

          <hr></hr>

          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>
                @{new Date().getFullYear()} Servicios Veterinarios Eläin. All
                Rights Reserved.
              </p>
            </div>

            <div className="sb__footer-below-links">
              <a href="/terms">
                <div>
                  <p>Terminos y Condiciones</p>
                </div>
              </a>
              <a href="/terms">
                <div>
                  <p>Politicas de privacidad</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
