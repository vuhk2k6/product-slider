const whiteColors = document.querySelectorAll(".slider__color--white");
const white = document.querySelector(".slider__product-img--white");
const blackColors = document.querySelectorAll(".slider__color--black");
const black = document.querySelector(".slider__product-img--black");
const redColors = document.querySelectorAll(".slider__color--red");
const red = document.querySelector(".slider__product-img--red");
const blueColors = document.querySelectorAll(".slider__color--blue");
const blue = document.querySelector(".slider__product-img--blue");
const whiteDesc = document.querySelector(".slider__desc--white");
const blackDesc = document.querySelector(".slider__desc--black");
const redDesc = document.querySelector(".slider__desc--red");
const blueDesc = document.querySelector(".slider__desc--blue");

for (const whiteColor of whiteColors) {
  whiteColor.onclick = function () {
    white.classList.add("active");
    red.classList.remove("active");
    black.classList.remove("active");
    blue.classList.remove("active");
    whiteDesc.classList.add("active");
    redDesc.classList.remove("active");
    blackDesc.classList.remove("active");
    blueDesc.classList.remove("active");
  };
}
for (const blackColor of blackColors) {
  blackColor.onclick = function () {
    black.classList.add("active");
    red.classList.remove("active");
    white.classList.remove("active");
    blue.classList.remove("active");
    blackDesc.classList.add("active");
    redDesc.classList.remove("active");
    whiteDesc.classList.remove("active");
    blueDesc.classList.remove("active");
  };
}
for (const blueColor of blueColors) {
  blueColor.onclick = function () {
    blue.classList.add("active");
    white.classList.remove("active");
    black.classList.remove("active");
    red.classList.remove("active");
    blueDesc.classList.add("active");
    whiteDesc.classList.remove("active");
    blackDesc.classList.remove("active");
    redDesc.classList.remove("active");
  };
}
for (const redColor of redColors) {
  redColor.onclick = function () {
    red.classList.add("active");
    white.classList.remove("active");
    black.classList.remove("active");
    blue.classList.remove("active");
    redDesc.classList.add("active");
    whiteDesc.classList.remove("active");
    blackDesc.classList.remove("active");
    blueDesc.classList.remove("active");
  };
}
