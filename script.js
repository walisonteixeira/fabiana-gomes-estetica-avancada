var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

window.addEventListener("load", function() {
    var whatsappLink = document.querySelector(".whatsapp");
    whatsappLink.setAttribute("href", "https://api.whatsapp.com/send?phone=5531999021027&text=Olá!%20Estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informações!");
  });