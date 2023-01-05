
//    fixed menu  bg

let programFix = document.querySelector('.nav-fixed');
let mainContent = document.querySelector('.about-company__title');

const progFixed = () => {
  let scrollTop = window.scrollY;
  let routeCenter = mainContent.offsetHeight / 2;

  if (scrollTop >= routeCenter) {
    programFix.classList.add("animation-nav");
  } else {
    programFix.classList.remove("animation-nav");
  }
};

window.addEventListener("scroll", () => {
  progFixed();
});




//    burger

let burger = document.getElementsByClassName("burger")[0];
let show = document.getElementsByClassName("nav-group")[0];

burger.addEventListener("click", () => {
  burger.classList.toggle("show-menu");
  show.classList.toggle("show");
});

//    slydes  for  main page

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function prevSlide(n) {
  index += n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n) {
  index += n;
  changeSlide();
}

if (document.querySelector(".slide")) {
  changeSlide();
}

function changeSlide() {
  if (index > slides.length - 1) index = 0;

  if (index < 0) index = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    dots[i].classList.remove("active");
  }

  slides[index].style.display = "flex";
  dots[index].classList.add("active");
}

//    slyder   for  city

//SLIDER

let slideIndex = 1;

if (document.querySelector(".main")) {
  showSlides(slideIndex);
}

function plus(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slidesMain = document.getElementsByClassName("main-reviews");
  if (n > slidesMain.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidesMain.length;
  }
  for (i = 0; i < slidesMain.length; i++) {
    slidesMain[i].style.display = "none";
  }
  slidesMain[slideIndex - 1].style.display = "block";
}

//   modalnoe  okno

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".js-overlay-modal")) {
    /* Записываем в переменные массив элементов-кнопок и подложку.
     Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll(".js-open-modal"),
      overlay = document.querySelector(".js-overlay-modal"),
      closeButtons = document.querySelectorAll(".js-modal-close");

    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {
      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener("click", function (e) {
        /* Предотвращаем стандартное действие элемента. Так как кнопку разные
           люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
           Нужно подстраховаться. */
        e.preventDefault();

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
           и будем искать модальное окно с таким же атрибутом. */
        var modalId = this.getAttribute("data-modal"),
          modalElem = document.querySelector(
            '.modal[data-modal="' + modalId + '"]'
          );

        /* После того как нашли нужное модальное окно, добавим классы
           подложке и окну чтобы показать их. */
        modalElem.classList.add("showmodal");
        overlay.classList.add("showmodal");
      });
    });

    closeButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        var parentModal = this.closest(".modal");

        parentModal.classList.remove("showmodal");
        overlay.classList.remove("showmodal");
      });
    });

    overlay.addEventListener("click", function () {
      document.querySelector(".modal.showmodal").classList.remove("showmodal");
      this.classList.remove("showmodal");
    });
  }
});

//   contacts   form
let contactform = document.querySelector(".footer-form");
if (contactform) {
  contactform.addEventListener("submit", function (e) {
    e.preventDefault();

    let data = new FormData(this);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", location.origin + "/sendcontact/");
    xhr.onload = function () {
      console.log(this.responseText);
      contactform.style.display = "none";
      let footerForm = document.querySelector(".footer-down-info");
      footerForm.innerText = "Спасибо, ваша заявка принята!";
      alert("Спасибо, ваша заявка принята!");
    };
    xhr.send(data);
  });
}



const smoothLinks = document.querySelectorAll(".nav-link");
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
