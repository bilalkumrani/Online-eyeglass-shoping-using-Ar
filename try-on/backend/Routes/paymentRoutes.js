const express = require("express");
const orders = require("../Controllers/paymentControllers/orders");
const authenticate = require("../Middleware/Authenticate");
const router = express.Router();

router.post("/orders", authenticate, orders);
module.exports = router;
