const express = require("express");
const { getAllFood } = require("../controllers/foodController");

const router = express.Router();

router.get("/", getAllFood);

module.exports = router;
