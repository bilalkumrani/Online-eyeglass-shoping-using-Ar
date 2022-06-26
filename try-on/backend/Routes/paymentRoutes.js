const express = require("express");
const orders = require("../Controllers/paymentControllers/orders");
const authenticate = require("../Middleware/Authenticate");
const router = express.Router();

router.post("/orders", orders);
module.exports = router;
