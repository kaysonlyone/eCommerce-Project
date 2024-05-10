// import test from "./products.json" assert {type: "json"}
import products from "./products.json" assert {type: "json"};

const productGrid = document.getElementById('product-grid');

products.forEach(product => {
  const productChild = document.createElement("div")
  productChild.innerHTML = `
  <img class="prod_img" src=${product.img}></img>
  <p class="products">${product.name}</p>
  <p class="price">$${product.price}</p>
  <p class="color">${product.description}</p>
  `
  productGrid.appendChild(productChild)
})


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

