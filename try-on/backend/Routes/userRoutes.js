const express = require("express");
const addToCart = require("../Controllers/userControllers/addCartController");
const authenticate = require("../Middleware/Authenticate");
const getUser = require("../Controllers/userControllers/getUser");
const removeCart = require("../Controllers/userControllers/removeCartController");
const router = express.Router();

router.post("/addcart", authenticate, addToCart);
router.post("/removecart", authenticate, removeCart);
router.post("/getuser", authenticate, getUser);

module.exports = router;
