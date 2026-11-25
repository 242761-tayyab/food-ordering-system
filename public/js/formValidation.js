const setError = (elementId, message) => {
  document.getElementById(elementId).textContent = message;
};

const clearAllErrors = () => {
  ["nameError", "phoneError", "emailError", "addressError"].forEach((id) => setError(id, ""));
};

const validateOrderForm = () => {
  clearAllErrors();
  let isValid = true;

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const email = document.getElementById("customerEmail").value.trim();
  const address = document.getElementById("customerAddress").value.trim();

  if (name.length < 3) {
    setError("nameError", "Name must be at least 3 characters");
    isValid = false;
  }

  const phonePattern = /^03\d{9}$/;
  if (!phonePattern.test(phone)) {
    setError("phoneError", "Phone must be 11 digits and start with 03");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    setError("emailError", "Enter a valid email address");
    isValid = false;
  }

  if (address.length < 10) {
    setError("addressError", "Address must be at least 10 characters");
    isValid = false;
  }

  return isValid;
};
