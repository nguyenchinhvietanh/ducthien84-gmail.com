var listProduct = document.querySelector("#products");
let resultProduct = document.querySelector("#results-products");
const popUp = document.querySelector(".pop-up");
let count = 0;
let cartList = JSON.parse(localStorage.getItem("shoppingCart")) || [];
let total = 1;
class Product {
  constructor(name, price, thumbnail) {
    this.name = name;
    this.price = price;
    this.thumbnail = thumbnail;
  }
  createProduct(name, brand, price, thumbnail) {
    return `
        <div class="col-lg-3 col-sm-12 mb-sm-3 col-xs-12 flex-wrap d-flex flex-column flex-lg-row g-3">
            <div class="card d-flex flex-column">
            <a class="justify-content-center d-flex align-items-center" href="products-detail.html?title=${name}&brand=${brand}&price=${price}&thumbnail=${thumbnail}">
            <img class="card-img-top img-fluid" src="${thumbnail}" style="width: auto;"></a>
            <div class="card-body d-flex justify-content-between flex-column text-center text-lg-start"><h5 class="card-title">${name}</h5><p>Giá: ${price}- Thương hiệu: ${brand}</p>
            <a class="btn btn-primary btn-buy" href="products-detail.html?title=${name}&brand=${brand}&price=${price}&thumbnail=${thumbnail}">Mua hàng</a>
            </div>
            </div>
        </div>   
        `;
  }
  getProduct() {
    for (let i = 0; i < 20; i++) {
      const ele = this.createProduct(
        data[count].name,
        data[count].brand,
        data[count].price,
        data[count].thumbnail
      );
      listProduct.innerHTML += ele;
      count++;
    }
  }
  renderProductDetails() {
    let url = new URL(window.location.href);
    const dataUrl = {
      title: url.searchParams.get("title"),
      brand: url.searchParams.get("brand"),
      price: url.searchParams.get("price"),
    };
    // console.log(url);
    // console.log(dataUrl);
    const titleProduct = document.querySelector(".product-title");
    const newPriceProduct = document.querySelector(".new-price");
    const oldPriceProduct = document.querySelector(".old-price strike");
    titleProduct.textContent = dataUrl.title;
    newPriceProduct.textContent = `${dataUrl.price}đ`;
    oldPriceProduct.textContent = `${parseInt(dataUrl.price) + 1000000}đ`;
  }
  filterProduct(value) {
    resultProduct.innerHTML = "";
    if (value.length === 0) {
      listProduct.style.display = "flex";
      resultProduct.style.display = "none";
    } else {
      resultProduct.style.display = "flex";
      listProduct.style.display = "none";
    }
    const filterArr = data.filter((item) => {
      // return item.name.toLowerCase().includes(value.toLowerCase);
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    filterArr.forEach((data) => {
      const ele = this.createProduct(
        data.name,
        data.brand,
        data.price,
        data.thumbnail
      );
      resultProduct.innerHTML += ele;
    });
    if (filterArr.length == 0) {
      popUp.classList.remove("d-none");
    }
  }
  // Handle Cart
  saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cartList));
  }
  loadCart() {
    cartList = JSON.parse(localStorage.getItem("shoppingCart"));
  }
  addItemToCart(name, price, thumbnail) {
    for (let item in cartList) {
      if (cartList[item].name === name) {
        this.saveCart();
        return;
      }
    }
    let test = new Product(name, price, thumbnail);
    cartList.push(test);
    this.saveCart();
    this.loadCart();
  }
  addToCart() {
    let addtr = document.createElement("tr");
    const tbody = document.querySelector(".tbody");
    if (cartList.length == 0) {
      document.querySelector("#cart").style.display = "none";
      document.querySelector("#cart-empty").classList.remove("d-none");
      return;
    }
    for (let i = 0; i < cartList.length; i++) {
      const p = cartList[i];
      tbody.innerHTML += `
              <tr class="cart-item">
              <td class="d-flex align-items-center">
                <img src="${p.thumbnail}" alt="" style="width: 70px" class="me-3">
                <span class="cart-name">${p.name}</span>
              </td>
              <td>
                <span class="mt-4 d-inline-block price">${p.price}</span>          
              </td>
              <td>
                <p class="mt-4 d-inline-block">
                <i class="fa fa-minus minus-btn" style="cursor: pointer;"></i>
                  <span class="pt-1 pb-1 p-3 pe-3 border total">1</span>
                  <i class="fa fa-add add-btn" style="cursor: pointer;"></i>

                </p>
              </td>
              <td>
                <p class="mt-4 delete__product-btn" style="cursor: pointer;">Xóa</p>
              </td>
            </tr>  
          `;
    }
    let cartTable = document.querySelector("tbody");
    cartTable.appendChild(addtr);
  }
  sumPrice() {
    const totals = document.querySelectorAll(".total");
    const prices = document.querySelectorAll(".price");
    let sum = 0;
    for (let i = 0; i < totals.length; i++) {
      let total = parseInt(totals[i].textContent);
      let price = parseInt(prices[i].textContent);
      let newPrice = total * price;
      sum += newPrice;
    }
    const priceTotal = document.querySelector(".price-total span");
    priceTotal.innerHTML = `Tổng tiền: ${sum}`;
  }
  // Add and Minus Product
  minusButton(minus) {
    minus.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (parseInt(e.target.nextElementSibling.textContent) > 1) total--;
        e.target.nextElementSibling.textContent = total;
      });
    });
  }
  addButton(add) {
    add.forEach((item) => {
      item.addEventListener("click", (e) => {
        total++;
        e.target.previousElementSibling.textContent = total;
      });
    });
  }
  deleteCart(delBtns) {
    delBtns.forEach((delBtn) => {
      delBtn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
        const todoText =
          e.target.parentElement.parentElement.querySelector(
            ".cart-name"
          ).textContent;
        const index = cartList.findIndex((item) => item.name === todoText);
        cartList.splice(index, 1);
        localStorage.setItem("shoppingCart", JSON.stringify(cartList));
        window.contentLoaded = true;
      });
    });
  }
}
