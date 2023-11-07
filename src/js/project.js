import '../css/style.css';

class ImageLoader {
  constructor() {
      this.imageElements = [
          { id: 'logo', src: '../src/public/assets/SVE-logo.ico' },
          { id: 'homeImg', src: '../src/public/assets/img-home-page.jpg' },
          { id: 'aboutImg', src: '../src/public/assets/about-img.jpg' },
          { id: 'servicesImg', src: '../src/public/assets/costo-distancia.jpeg' },
          { id: 'contactImg', src: '../src/public/assets/contact-img.png' },
          { id: 'footerImg', src: '../src/public/assets/footer-logo.ico' }
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

// Crear una instancia de ImageLoader y cargar imágenes cuando se carga el documento
document.addEventListener('DOMContentLoaded', function () {
  const imageLoader = new ImageLoader();
  imageLoader.loadImages();
});



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

