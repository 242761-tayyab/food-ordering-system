const path = require("path");
const { readJsonFile } = require("../utils/fileHandler");

const foodFilePath = path.join(__dirname, "..", "data", "food.json");

const getAllFood = (req, res) => {
  const foodItems = readJsonFile(foodFilePath);
  res.json(foodItems);
};

module.exports = { getAllFood };
