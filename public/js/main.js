document.getElementById("foodList").addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart-btn")) {
    addToCart(Number(event.target.dataset.id));
  }
});

document.getElementById("cartList").addEventListener("click", (event) => {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    removeFromCart(Number(event.target.dataset.id));
  }
});

document.getElementById("categoryFilter").addEventListener("change", (event) => {
  filterFoodByCategory(event.target.value);
});

document.getElementById("orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitOrder();
});

loadFoodItems();
showCart();
