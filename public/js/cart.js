let cart = [];

const addToCart = (foodId) => {
  const food = allFoodItems.find((item) => item.id === foodId);
  const existingItem = cart.find((item) => item.id === foodId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...food, quantity: 1 });
  }

  showCart();
};

const removeFromCart = (foodId) => {
  cart = cart.filter((item) => item.id !== foodId);
  showCart();
};

const calculateTotal = () => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const clearCart = () => {
  cart = [];
  showCart();
};

const showCart = () => {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = '<li class="list-group-item text-muted">Cart is empty</li>';
  }

  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `
      <div>
        <div>${item.name}</div>
        <small class="text-muted">Rs. ${item.price} x ${item.quantity}</small>
      </div>
      <button class="btn btn-sm btn-outline-danger remove-from-cart-btn" data-id="${item.id}">Remove</button>
    `;
    cartList.appendChild(listItem);
  });

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cartCount").textContent = totalQuantity;
  document.getElementById("totalBill").textContent = calculateTotal();
};
