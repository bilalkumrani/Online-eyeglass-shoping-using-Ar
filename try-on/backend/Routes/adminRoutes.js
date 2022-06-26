const express = require("express");
const addProduct = require("../Controllers/adminControllers/addProductController");
const removeProduct = require("../Controllers/adminControllers/removeProductController");
const login = require("../Controllers/adminControllers/loginController");
const edit = require("../Controllers/adminControllers/editProductController");
const isAdmin = require("../Middleware/isAdmin");
const router = express.Router();

router.get("/login", login);
router.post("/add", isAdmin, addProduct);
router.delete("/remove", isAdmin, removeProduct);
router.patch("/edit", isAdmin, edit);
module.exports = router;
