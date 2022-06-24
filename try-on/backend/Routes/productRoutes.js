const express = require("express");
const getAllProducts = require("../Controllers/producControllers/getAllProducts");

const router = express.Router();

router.get("/all", getAllProducts);

module.exports = router;
