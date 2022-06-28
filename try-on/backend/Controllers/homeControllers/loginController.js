const mongoose = require("mongoose");
const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const { JT_SECRET } = require("../../keys");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "password or email is missing" });
  }
  const savedUser = await User.findOne({ email });
  if (!savedUser) {
    return res.status(422).json({ error: "Invalid password or Eamil" });
  }
  let matched = await bcrypt.compare(password, savedUser.password);
  if (matched) {
    const token = jwt.sign({ _id: savedUser._id }, JT_SECRET);
    return res.json({ status: "ok", user: savedUser, token });
  } else {
    res.status(422).json({ error: "Invalid password or Eamil" });
  }
};

module.exports = login;
