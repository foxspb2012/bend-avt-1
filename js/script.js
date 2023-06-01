/* Слайдер с товарами */
var links = document.querySelectorAll(".slider-button");
var sliders = document.querySelectorAll(".slider-item");

var currentSelect = 0;

for (var i = 0; i < links.length; i++) {
  var link = links[i];

  link.addEventListener('click', setClickedItem, false);

  link.itemID = i;
}

links[currentSelect].classList.add("current");
sliders[currentSelect].classList.add("slide-current");

function setClickedItem(evt) {
  removeActiveLinks();

  var clickedLink = evt.target;
  currentSelect = clickedLink.itemID;

  links[currentSelect].classList.add("current");
  sliders[currentSelect].classList.add("slide-current");
}

function removeActiveLinks() {
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("current");
    sliders[i].classList.remove("slide-current");
  }
}

/* Слайдер сервисов */
var serviceButtons = document.querySelectorAll(".service-button");
var serviceSlides = document.querySelectorAll(".service-item");

var serviceSelect = 0;

for (var i = 0; i < serviceButtons.length; i++) {
  var serviceButton = serviceButtons[i];

  serviceButton.addEventListener('click', setClickedButtons, false);

  serviceButton.itemID = i;
}

serviceButtons[serviceSelect].classList.add("current-button");
serviceSlides[serviceSelect].classList.add("current");

function setClickedButtons(evt) {
  removeActiveButtons();

  var clickedButton = evt.target;
  serviceSelect = clickedButton.itemID;

  serviceButtons[serviceSelect].classList.add("current-button");
  serviceSlides[serviceSelect].classList.add("current");
}

function removeActiveButtons() {
  for (var i = 0; i < serviceButtons.length; i++) {
    serviceButtons[i].classList.remove("current-button");
    serviceSlides[i].classList.remove("current");
  }
}

/* Модальное окно карта*/
var  popupMapLink = document.querySelector(".map");
var  popupMap = document.querySelector(".popup-map");
var popupMapClose = document.querySelector(".popup-map-close");

popupMapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-map-active");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("popup-map-active")) {
      popupMap.classList.remove("popup-map-active");
    }
  }
})

popupMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("popup-map-active");
})

/* Модальное окно форма */
var popupWriteLink = document.querySelector(".contacts-company-btn");
var popupWrite = document.querySelector(".popup");
var userName = popupWrite.querySelector("[name=user-name]");
var userEmail = popupWrite.querySelector("[name=user-email]");
var popupWriteForm = popupWrite.querySelector("form");
var popupWriteClose = document.querySelector(".popup-close");


popupWriteLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("popup-active");
  userName.focus();
})

popupWriteForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    popupWrite.classList.remove("popup-error");
    popupWrite.offsetWidth = popupWrite.offsetWidth;
    popupWrite.classList.add("popup-error");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWrite.classList.contains("popup-active")) {
      popupWrite.classList.remove("popup-active");
      popupWrite.classList.remove("popup-error");
    }
  }
})

popupWriteClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("popup-active");
  popupWrite.classList.remove("popup-error");
})
