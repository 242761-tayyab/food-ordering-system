const path = require("path");
const { readJsonFile, writeJsonFile } = require("../utils/fileHandler");

const orderFilePath = path.join(__dirname, "..", "data", "orders.json");

const getAllOrders = (req, res) => {
  const orders = readJsonFile(orderFilePath);
  res.json(orders);
};

const createOrder = (req, res) => {
  const { customer, items, totalBill } = req.body;

  if (!customer || !customer.name || !customer.phone || !customer.address) {
    return res.status(400).json({ message: "Customer name, phone and address are required" });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Order must have at least one item" });
  }

  const orders = readJsonFile(orderFilePath);

  const newOrder = {
    id: orders.length + 1,
    customer,
    items,
    totalBill,
    date: new Date().toISOString()
  };

  orders.push(newOrder);
  writeJsonFile(orderFilePath, orders);

  res.status(201).json({ message: "Order placed successfully", order: newOrder });
};

module.exports = { getAllOrders, createOrder };
