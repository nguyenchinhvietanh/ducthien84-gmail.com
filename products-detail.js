const modalConfig = document.querySelector("#modal-config");
const modalReview = document.querySelector("#modal-review");
const closeModalConfig = document.querySelector(".close-modal");
const closeModalReview = document.querySelector(".close-modal-review");
const configBtn = document.querySelector(".btn-config");
const overLay = document.querySelector(".overLay");
const overLayReview = document.querySelector(".overLay-review");
const viewBtn = document.querySelector(".view-btn");
const productTitle = document.querySelector(".product-title");
const storages = document.querySelectorAll(".storage_1");
const colors = document.querySelectorAll(".color_1");
const buyNow = document.querySelector(".buy__now-btn");
productTitle.innerHTML = data.name;
const product = new Product();
product.renderProductDetails();
configBtn.addEventListener("click", () => {
  modalConfig.classList.remove("is-hidden");
});
viewBtn.addEventListener("click", () => {
  modalReview.classList.remove("is-hidden");
});
closeModalConfig.addEventListener("click", () => {
  modalConfig.classList.add("is-hidden");
  modalReview.classList.add("is-hidden");
});
closeModalReview.addEventListener("click", () => {
  modalReview.classList.add("is-hidden");
});
overLay.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    modalConfig.classList.add("is-hidden");
    // modalReview.classList.add("is-hidden");
  }
});
overLayReview.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    modalReview.classList.add("is-hidden");
  }
});
ActClick(storages);
ActClick(colors);
function ActClick(selectors) {
  selectors.forEach((selector) => {
    selector.addEventListener("click", (e) => {
      selectors.forEach((ev) => {
        ev.classList.remove("act");
      });
      selector.classList.add("act");
    });
  });
}
// product.addToCart()
buyNow.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector(".product-title").textContent;
  const price = document.querySelector(".new-price").textContent;
  const brand = document.querySelector(".product-img").src;
  // product.saveCart();
  product.addItemToCart(name, price, brand);
  product.loadCart();
});
