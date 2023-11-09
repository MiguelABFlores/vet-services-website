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

//funcion para no mostrar mas de 1 de los botones paquetes (perro y gato)
$(document).ready(function() {
    $('.toggle-button').click(function() {
        var contentId = $(this).data('bs-target');
        console.log(contentId)
        if(contentId == "#perroContent"){
          $(contentId).css("display", "block");
          $("#gatoContent").css("display","none");
          console.log("perro")
        }

        if(contentId == "#gatoContent"){
          $(contentId).css("display", "block");
          $("#perroContent").css("display","none");
          console.log("gato")
        }
        
    });
});

