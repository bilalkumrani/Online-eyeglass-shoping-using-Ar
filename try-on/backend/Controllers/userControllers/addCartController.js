const User = require("../../Models/User");
const Product = require("../../Models/Product");

const addToCart = async (req, res) => {
  const { _id } = req.user;
  const { productId } = req.body;

  console.log(productId);

  User.findByIdAndUpdate({ _id }, { $push: { cart: productId } }).exec(
    (err, result) => {
      if (err) {
        return res.json({ status: "error", error });
      }
      return res.json({ status: "ok", user: result });
    }
  );
};
module.exports = addToCart;
