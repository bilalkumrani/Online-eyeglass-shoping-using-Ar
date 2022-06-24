const express = require("express");
const addToCart = require("../Controllers/userControllers/addCartController");
const authenticate = require("../Middleware/Authenticate");
const router = express.Router();

router.post("/addcart", addToCart);

module.exports = router;
