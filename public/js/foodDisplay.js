let allFoodItems = [];

const showFoodItems = (foodItems) => {
  const foodList = document.getElementById("foodList");
  foodList.innerHTML = "";

  foodItems.forEach((food) => {
    const column = document.createElement("div");
    column.className = "col-12 col-sm-6 col-md-4 col-lg-6 col-xl-4";
    column.innerHTML = `
      <div class="card food-card shadow-sm">
        <div class="card-body">
          <div>
            <h5 class="card-title">${food.name}</h5>
            <span class="badge bg-secondary mb-2">${food.category}</span>
            <p class="card-text fw-bold">Rs. ${food.price}</p>
          </div>
          <button class="btn btn-danger add-to-cart-btn" data-id="${food.id}">Add to Cart</button>
        </div>
      </div>
    `;
    foodList.appendChild(column);
  });
};

const fillCategoryFilter = (foodItems) => {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = [...new Set(foodItems.map((food) => food.category))];

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
};

const filterFoodByCategory = (category) => {
  if (category === "All") {
    showFoodItems(allFoodItems);
  } else {
    const filteredItems = allFoodItems.filter((food) => food.category === category);
    showFoodItems(filteredItems);
  }
};

const loadFoodItems = async () => {
  try {
    const response = await fetch("/food");
    allFoodItems = await response.json();
    fillCategoryFilter(allFoodItems);
    showFoodItems(allFoodItems);
  } catch (error) {
    document.getElementById("foodList").innerHTML =
      '<p class="text-danger">Could not load food items. Is the server running?</p>';
  }
};
