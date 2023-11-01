import '../css/style.css';
import sveLogo from '../public/assets/SVE-logo.ico';
import homeImage from '../public/assets/img-home-page.jpg';
import aboutImage from '../public/assets/about-img.jpg';
import servicesImage from '../public/assets/costo-distancia.jpeg'
import contactImage from '../public/assets/contact-img.png'
import footerImage from  '../public/assets/footer-logo.ico'

document.addEventListener("DOMContentLoaded", function(event) { 
    var homeLogo = document.getElementById('logo');
    var homeImg = document.getElementById('homeImg');
    var aboutImg = document.getElementById('aboutImg');
    var servicesImg = document.getElementById('servicesImg')
    var contactImg = document.getElementById('contactImg')
    var footerImg = document.getElementById('footerImg')
    homeLogo.src = sveLogo;
    homeImg.src = homeImage;
    aboutImg.src = aboutImage;
    servicesImg.src = servicesImage;
    contactImg.src = contactImage;
    footerImg.src = footerImage;
});



const toggleButtons = document.querySelectorAll(".toggle-button");

// Agrega un evento clic a cada botón
toggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Encuentra el elemento .package-content más cercano al botón
    const packageContent = button.closest(".package-option").querySelector(".package-content");
    
    // Alternar la visibilidad del contenido
    if (packageContent.style.display === "none") {
      packageContent.style.display = "block";
      button.classList.add("active"); // Agrega una clase activa al botón
    } else {
      packageContent.style.display = "none";
      button.classList.remove("active"); // Elimina la clase activa del botón
    }
  });
});