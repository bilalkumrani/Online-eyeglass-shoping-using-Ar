const express = require("express");
const addProduct = require("../Controllers/adminControllers/addProductController");
const removeProduct = require("../Controllers/adminControllers/removeProductController");
const router = express.Router();

router.post("/add", addProduct);
router.delete("/remove", removeProduct);
module.exports = router;
