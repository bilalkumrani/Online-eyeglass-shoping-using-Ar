const jt = require("jsonwebtoken");
const { JT_SECRET, ADMIN } = require("../keys");

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "You don't have access to this action" });
  }

  const token = authorization;
  jt.verify(token, JT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "no admin access" });
    }
    const { username } = payload;
    if (username == ADMIN.username) {
      const userData = ADMIN;
      req.user = userData;
    }
    next();
  });
};

module.exports = authenticate;
