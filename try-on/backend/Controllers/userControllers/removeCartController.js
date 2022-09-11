const User = require("../../Models/User");
const Product = require("../../Models/Product");
const user = require("../../Models/User");

const removeCart = async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;

  User.findByIdAndUpdate(
    { _id },
    { $pull: { cart: productId } },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.json({ status: "error", error });
    }
    return res.json({ status: "ok", user: result });
  });
};
module.exports = removeCart;
