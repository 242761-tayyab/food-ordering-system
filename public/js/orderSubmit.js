const showOrderMessage = (message, type) => {
  const orderMessage = document.getElementById("orderMessage");
  orderMessage.innerHTML = `<div class="alert alert-${type} mb-0">${message}</div>`;
};

const submitOrder = async () => {
  if (cart.length === 0) {
    showOrderMessage("Your cart is empty. Please add some items.", "warning");
    return;
  }

  if (!validateOrderForm()) {
    return;
  }

  const orderData = {
    customer: {
      name: document.getElementById("customerName").value.trim(),
      phone: document.getElementById("customerPhone").value.trim(),
      email: document.getElementById("customerEmail").value.trim(),
      address: document.getElementById("customerAddress").value.trim()
    },
    items: cart,
    totalBill: calculateTotal()
  };

  try {
    const response = await fetch("/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    });

    const result = await response.json();

    if (response.ok) {
      showOrderMessage(`Order placed successfully! Your order number is ${result.order.id}`, "success");
      clearCart();
      document.getElementById("orderForm").reset();
    } else {
      showOrderMessage(result.message, "danger");
    }
  } catch (error) {
    showOrderMessage("Something went wrong. Please try again.", "danger");
  }
};
