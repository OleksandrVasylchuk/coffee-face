// let btn_prev = document.querySelector(".prev");
// let btn_next = document.querySelector(".next");
// let images = document.querySelectorAll(".slider-contrnt");
// let i = 0;
// i++;
// if (i >= images.length) {
//   i = 0;
// }
// btn_prev.onclick = function () {
//   images[i].style.display = "none";
//   i = i - 1;
//   if (i < 0) {
//     i = images.length - 1;
//   }

//   images[i].style.display = "block";
// };

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
  showSlides((slideIndex -= 1));
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
  showSlides((slideIndex = n));
}

/* Основная функция слайдера */
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
