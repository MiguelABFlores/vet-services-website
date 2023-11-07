import '../css/style.css';

const imagePaths = {
  logo: '../src/public/assets/SVE-logo.ico',
  homeImg: '../src/public/assets/img-home-page.jpg',
  aboutImg: '../src/public/assets/about-img.jpg',
  servicesImg: '../src/public/assets/costo-distancia.jpeg',
  contactImg: '../src/public/assets/contact-img.png',
  footerImg: '../src/public/assets/footer-logo.ico',
};

class ImageLoader {
  constructor() {
    this.imageElements = [
      { id: 'logo', src: imagePaths.logo },
      { id: 'homeImg', src: imagePaths.homeImg },
      { id: 'aboutImg', src: imagePaths.aboutImg },
      { id: 'servicesImg', src: imagePaths.servicesImg },
      { id: 'contactImg', src: imagePaths.contactImg },
      { id: 'footerImg', src: imagePaths.footerImg },
    ];
  }

  loadImages() {
    this.imageElements.forEach((imageInfo) => {
      const image = document.getElementById(imageInfo.id);
      if (image) {
        image.src = imageInfo.src;
      }
    });
  }
}

// Crear una instancia de ImageLoader y cargar imágenes cuando se carga el documento.
document.addEventListener('DOMContentLoaded', function () {
  const imageLoader = new ImageLoader();
  imageLoader.loadImages();
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

