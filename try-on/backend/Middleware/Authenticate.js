const jt = require("jsonwebtoken");
const { JT_SECRET } = require("../keys");
const User = require("../Models/User");

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "you must be logged in" });
  }

  const token = authorization;
  jt.verify(token, JT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be logged in" });
    }
    const { _id } = payload;
    try {
      const userData = await User.findById({ _id });
      req.user = userData;
      next();
    } catch (error) {
      return res.json({ status: "error cant found this user", error });
    }
  });
};

module.exports = authenticate;
