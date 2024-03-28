const mySlides = document.querySelectorAll(".mySlides");
const slideWrapper = document.querySelector(".silde__wrapper");
const slideDots = document.querySelectorAll(".slider__dot-item");
const listSlideDot = document.querySelector(".slider__dot-list");
const sliderItemWidth = mySlides[0].offsetWidth;
const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const showMoreBtn = document.getElementById("getMoreItem");
let index = 0;
let positionX = 0;
const mySlideLength = mySlides.length;
// CONSTANTS
