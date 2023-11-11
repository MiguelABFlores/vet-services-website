import "../styles/Services.css";
import images from "../assets/images/images";
import React, { useState } from "react";

function Services() {
  const [activeContent, setActiveContent] = useState('');

  const handleToggle = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <section className="services" id="services">
        <h2 className="services-title">Precios</h2>
        <h4 className="services-subtitle">*Mas costo a domicilio por zona 2023*</h4>
        <div className="services-img">
          <img src={images.serviceImg} className="img" alt="costo distancia"/>
        </div>

        <div className="services-content">
          <div className="services-items">
            <h3 className="service-title">Servicios</h3>
            <ul>
              <li>
                Consulta <span className="price">$480</span>
              </li>
              <li>
                Ultrasonido Abdominal <span className="price">$600</span>
              </li>
              <li>
                Coproparasitoscopico <span className="price">$100</span>
              </li>
              <li>
                Biometria Hematica <span className="price">$330</span>
              </li>
              <li>
                Perfil Quimico <span className="price">$1,130</span>
              </li>
              <li>
                Examen de Orina <span className="price">$170</span>
              </li>
            </ul>
          </div>

          <div className="services-items">
            <h3 className="service-title">Vacunas</h3>
            <ul>
              <li>
                Puppy y Puppy DP <span className="price">$360</span>
              </li>
              <li>
                Multiple <span className="price">$350</span>
              </li>
              <li>
                Rabia <span className="price">$220</span>
              </li>
              <li>
                Bordetella <span className="price">$250</span>
              </li>
              <li>
                Triple FSelina <span className="price">$350</span>
              </li>
              <li>
                Leucemia <span className="price">$350</span>
              </li>
              <li>
                Snap Sida/Leucemia <span className="price">$570</span>
              </li>
            </ul>
          </div>

          <div className="services-items">
            <h3 className="service-title">Paquetes</h3>

            <div className="buttons-container">
              <button
                className="btn btn-primary toggle-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#perroContent"
                aria-expanded={activeContent === "perroContent"}
                aria-controls="perroContent"
                onClick={() => handleToggle("perroContent")}
              >
                Perro
              </button>
              <button
                className="btn btn-primary toggle-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#gatoContent"
                aria-expanded={activeContent === "gatoContent"}
                aria-controls="gatoContent"
                onClick={() => handleToggle("gatoContent")}
              >
                Gato
              </button>
            </div>

            <div id="perroContent" style={{ display: activeContent === 'perroContent' ? 'block' : 'none' }}>
              <h4 className="package-title">Perro:</h4>
              <div className="card card-body">
                <ul className="package-options">
                  <li>
                    Vacunación Puppy <span className="price">$2,030</span>
                  </li>
                  <li>
                    Revacunación Anual Perro <span className="price">$780</span>
                  </li>
                  <li className="services-subtitle">
                    Check Up Anual: <span className="price">$2,120</span>
                  </li>
                  <li className="check">
                    Hemática, Perfil Químico, Urinálisis, Ultrasonido Abdominal*
                  </li>
                </ul>
              </div>
            </div>

            <div id="gatoContent" style={{ display: activeContent === 'gatoContent' ? 'block' : 'none' }}>
              <h4 className="package-title">Gato:</h4>
              <ul className="package-options">
                <li>
                  Vacunación Gatito + Prueba Sida/Leucemia
                  <span className="price">$2,030</span>
                </li>
                <li>
                  Revacunación Anual Gato <span className="price">$850</span>
                </li>
                <li className="services-subtitle">
                  Check Up Anual: <span className="price">$2,120</span>
                </li>
                <li className="check">
                  Hemática, Perfil Químico, Urinálisis, Ultrasonido Abdominal*
                </li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Services;
