const mongoose = require("mongoose");
const User = require("../../Models/User");
const bcrypt = require("bcrypt");
const signUp = async (req, res) => {
  const { name, email, password: originalPass, pic } = req.body;
  console.log(req.body);
  if (!name || !email || !originalPass) {
    return res.json({ status: "enter complete data" });
  } else {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const password = await bcrypt.hash(originalPass, 10);
      try {
        const user = await User.create({
          name,
          email,
          password,
          pic,
          cart: [],
          orders: [],
        });
        return res.json(user);
      } catch (error) {
        return res.json({ status: "user not added", error });
      }
    } else {
      return res.json({ error: "already existing user please login" });
    }
  }
};
module.exports = signUp;
