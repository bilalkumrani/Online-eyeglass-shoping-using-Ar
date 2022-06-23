const express = require("express");
const signUp = require("../Controllers/signUpController");
const login = require("../Controllers/loginController");
const router = express.Router();

router.post("/signup", signUp);
router.get("/login", login);
module.exports = router;
