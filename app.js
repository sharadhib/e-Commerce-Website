const products = [
  { name: "Wireless Headphones", price: "₹1,499", img: "images/product1.jpg" },
  { name: "Bluetooth Speaker", price: "₹999", img: "images/product2.jpg" },
  { name: "Smart Watch", price: "₹2,999", img: "images/product3.jpg" },
  { name: "Sports Shoes", price: "₹1,199", img: "images/product4.jpg" },
  { name: "Coffee Mug", price: "₹299", img: "images/product5.jpg" },
  { name: "Laptop Backpack", price: "₹1,899", img: "images/product6.jpg" },
];

let cart = [];

function renderProducts() {
  const container = document.getElementById("products");

  container.innerHTML = products.map((p, index) => `
    <div class="product" data-index="${index}">
      <img src="${p.img}" alt="${p.name}">
      <div class="product-content">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button class="cart-btn">Add to Cart</button>
        <button class="remove-btn" style="display: none;">Remove from Cart</button>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".product").forEach(productEl => {
    const index = productEl.getAttribute("data-index");
    const addBtn = productEl.querySelector(".cart-btn");
    const removeBtn = productEl.querySelector(".remove-btn");
    const product = products[index];

    addBtn.addEventListener("click", () => {
      cart.push(product);
      console.log("Cart:", cart);
      addBtn.style.display = "none";
      removeBtn.style.display = "inline-block";
    });

    removeBtn.addEventListener("click", () => {
      cart = cart.filter(item => item.name !== product.name);
      console.log("Cart:", cart);
      removeBtn.style.display = "none";
      addBtn.style.display = "inline-block";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  });
});
