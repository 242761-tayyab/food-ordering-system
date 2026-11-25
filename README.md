# Online Food Ordering System

## Run the project

1. Open this folder in VS Code
2. Open the terminal (Ctrl + `)
3. Run `npm install`
4. Run `npm start`
5. Open http://localhost:3000 in your browser

## Project files

| File | What it does |
|------|--------------|
| server.js | Starts the server and connects the routes |
| routes/foodRoutes.js | Route for GET /food |
| routes/orderRoutes.js | Routes for GET /orders and POST /orders |
| controllers/foodController.js | Code that reads the food list |
| controllers/orderController.js | Code that saves and reads orders |
| utils/fileHandler.js | Reads and writes JSON files |
| data/food.json | Food items data |
| data/orders.json | Saved orders |
| public/index.html | Main page (Bootstrap) |
| public/css/style.css | Custom styles |
| public/js/foodDisplay.js | Shows food cards and category filter |
| public/js/cart.js | Add, remove and total of cart |
| public/js/formValidation.js | Order form validation |
| public/js/orderSubmit.js | Sends the order to the server |
| public/js/main.js | Event listeners |

## Test APIs with Postman

Make sure the server is running first (`npm start`).

### 1. GET /food
1. Open Postman and click New > HTTP Request
2. Select method GET
3. URL: http://localhost:3000/food
4. Click Send
5. You will see the list of 10 food items with status 200 OK

### 2. POST /orders
1. Create a new request, select method POST
2. URL: http://localhost:3000/orders
3. Open the Body tab, select raw, and choose JSON from the dropdown
4. Paste this:

{
  "customer": {
    "name": "Ali Khan",
    "phone": "03001234567",
    "email": "ali@example.com",
    "address": "House 12, Street 5, Islamabad"
  },
  "items": [
    { "id": 1, "name": "Chicken Burger", "price": 450, "category": "Burgers", "quantity": 2 }
  ],
  "totalBill": 900
}

5. Click Send
6. You will see status 201 Created and the saved order

### 3. GET /orders
1. Create a new request, select method GET
2. URL: http://localhost:3000/orders
3. Click Send
4. You will see all saved orders including the one you just created

### 4. Test an error (optional)
Send POST /orders with an empty body {}. You will get status 400 and an error message.

## Git commands

git init
git add package.json .gitignore server.js routes controllers utils data
git commit -m "Add Node.js REST APIs with JSON file storage"
git add public/index.html public/css
git commit -m "Add responsive Bootstrap frontend layout"
git add public/js README.md
git commit -m "Add cart, form validation and order submission with JavaScript"
git log --oneline
