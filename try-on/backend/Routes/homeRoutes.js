const express = require("express");
const signUp = require("../Controllers/homeControllers/signUpController");
const login = require("../Controllers/homeControllers/loginController");
const router = express.Router();

router.post("/signup", signUp);
router.get("/login", login);
module.exports = router;
