const express = require("express");
const addToCart = require("../Controllers/userControllers/addCartController");
const authenticate = require("../Middleware/Authenticate");
const router = express.Router();

router.post("/addcart", authenticate, addToCart);

module.exports = router;
