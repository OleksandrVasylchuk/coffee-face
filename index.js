var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider-contrnt");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

(() => {
  const refs = {
    openMenyBtn: document.querySelector("[data-menu-open]"),
    closeMenyBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenyBtn.addEventListener("click", toggleMeny);
  refs.closeMenyBtn.addEventListener("click", toggleMeny);

  function toggleMeny() {
    document.body.classList.toggle("menu-open");
    refs.menu.classList.toggle("is-hidden");
  }
})();
