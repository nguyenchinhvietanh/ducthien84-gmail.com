
function hanldeSlide(direction) {
  if (direction === 1) {
    positionX = positionX - sliderItemWidth;
    if (index >= mySlideLength - 1) {
      //   slideWrapper.style = "transform: translateX(0px)";
      index = -1;
      positionX = 0;
    }
    slideWrapper.style = `transform: translateX(${positionX}px)`;
    index++;
  } else if (direction === -1) {
    positionX = positionX + sliderItemWidth;
    if (index <= 0) {
      index = mySlideLength;
      positionX = -3072;
    }
    slideWrapper.style = `transform: translateX(${positionX}px)`;
    index--;
  }
  [...slideDots].forEach((el) => {
    el.classList.remove("is-active");
  });
  slideDots[index].classList.add("is-active");
}
prevBtn.addEventListener("click", function () {
  hanldeSlide(-1);
});
nextBtn.addEventListener("click", function () {
  hanldeSlide(1);
});

[...slideDots].forEach((item) => {
  item.addEventListener("click", function (event) {
    [...slideDots].forEach((e) => {
      e.classList.remove("is-active");
    });
    event.target.classList.add("is-active");
    const dataIndex = parseInt(event.target.dataset.index);
    index = dataIndex;
    positionX = -1 * index * sliderItemWidth;
    slideWrapper.style = `transform: translateX(${positionX}px)`;
  });
});
setInterval(function () {
  hanldeSlide(1);
}, 5000);
