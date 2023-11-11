import React from "react";
import "../styles/Services.css";
import images from "../assets/images/images";

function Services() {
  
  return (
    <section class="services" id="services">
      <div class="services-padding">
        <h2 class="services-title">Precios</h2>
        <h4 class="services-subtitle">*Mas costo a domicilio por zona*</h4>
        <div class="services-img">
          <img src={images.serviceImg} className="logo" alt="Servicio a distancia" />
        </div>

        <div class="services-content">
          <div class="services-items">
            <h3 class="service-title">Servicios</h3>
            <ul>
              <li>
                Consulta <span class="price">$480</span>
              </li>
              <li>
                Ultrasonido Abdominal <span class="price">$600</span>
              </li>
              <li>
                Coproparasitoscopico <span class="price">$100</span>
              </li>
              <li>
                Biometria Hematica <span class="price">$330</span>
              </li>
              <li>
                Perfil Quimico <span class="price">$1,130</span>
              </li>
              <li>
                Examen de Orina <span class="price">$170</span>
              </li>
            </ul>
          </div>

          <div class="services-items">
            <h3 class="service-title">Vacunas</h3>
            <ul>
              <li>
                Puppy y Puppy DP <span class="price">$360</span>
              </li>
              <li>
                Multiple <span class="price">$350</span>
              </li>
              <li>
                Rabia <span class="price">$220</span>
              </li>
              <li>
                Bordetella <span class="price">$250</span>
              </li>
              <li>
                Triple FSelina <span class="price">$350</span>
              </li>
              <li>
                Leucemia <span class="price">$350</span>
              </li>
              <li>
                Snap Sida/Leucemia <span class="price">$570</span>
              </li>
            </ul>
          </div>

          <div class="services-items">
            <h3 class="service-title">Paquetes</h3>

            <div class="buttons-container">
              <button
                class="btn btn-primary toggle-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#perroContent"
                aria-expanded="false"
                aria-controls="perroContent"
              >
                Perro
              </button>
              <button
                class="btn btn-primary toggle-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#gatoContent"
                aria-expanded="false"
                aria-controls="gatoContent"
              >
                Gato
              </button>
            </div>

            <div id="perroContent" class="content-container collapse">
              <h4 class="package-title">Perro:</h4>
              <div class="card card-body">
                <ul class="package-options">
                  <li>
                    Vacunación Puppy <span class="price">$2,030</span>
                  </li>
                  <li>
                    Revacunación Anual Perro <span class="price">$780</span>
                  </li>
                  <li class="services-subtitle">
                    Check Up Anual: <span class="price">$2,120</span>
                  </li>
                  <li class="check">
                    Hemática, Perfil Químico, Urinálisis, Ultrasonido Abdominal*
                  </li>
                </ul>
              </div>
            </div>

            <div id="gatoContent" class="content-container collapse">
              <h4 class="package-title">Gato:</h4>
              <ul class="package-options">
                <li>
                  Vacunación Gatito + Prueba Sida/Leucemia
                  <span class="price">$2,030</span>
                </li>
                <li>
                  Revacunación Anual Gato <span class="price">$850</span>
                </li>
                <li class="services-subtitle">
                  Check Up Anual: <span class="price">$2,120</span>
                </li>
                <li class="check">
                  Hemática, Perfil Químico, Urinálisis, Ultrasonido Abdominal*
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
