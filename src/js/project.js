import '../css/style.css';

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    image.src = src;
  });
};

const loadImages = async () => {
  const images = {};

  const logoImage = await loadImage('../public/assets/SVE-logo.ico');
  images.logo = logoImage;

  const homeImage = await loadImage('../public/assets/img-home-page.jpg');
  images.homeImg = homeImage;

  const aboutImage = await loadImage('../public/assets/about-img.jpg');
  images.aboutImg = aboutImage;

  const servicesImage = await loadImage('../public/assets/costo-distancia.jpeg');
  images.servicesImg = servicesImage;

  const contactImage = await loadImage('../public/assets/contact-img.png');
  images.contactImg = contactImage;

  const footerImage = await loadImage('../public/assets/footer-logo.ico');
  images.footerImg = footerImage;

  return images;
};

const images = await loadImages();

const imagePaths = {
  logo: images.logo,
  homeImg: images.homeImg,
  aboutImg: images.aboutImg,
  servicesImg: images.servicesImg,
  contactImg: images.contactImg,
  footerImg: images.footerImg,
};

function showImages() {
  const images = document.querySelectorAll('img');
  for (const image of images) {
    image.src = imagePaths[image.id];
  }
}

showImages();


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

