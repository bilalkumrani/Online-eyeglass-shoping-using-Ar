const User = require("../../Models/User");

const getUser = async (req, res) => {
  return res.json(req.user);
};
module.exports = getUser;
