const mongoose = require("mongoose");
const { JT_SECRET, ADMIN } = require("../../keys");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(422).json({ error: "username or password is missing" });
  }

  if (username == ADMIN.username && password == ADMIN.password) {
    const token = jwt.sign({ username: ADMIN.username }, JT_SECRET);
    return res.json({ status: "ok", user: ADMIN, token });
  } else {
    res.status(422).json({ error: "Invalid password or Username" });
  }
};

module.exports = login;
