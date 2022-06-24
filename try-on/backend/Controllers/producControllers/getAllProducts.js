const Product = require("../../Models/Product");
const getAllProducts = async (req, res) => {
  try {
    const result = await Product.find();
    Promise.all(result).then((products) => {
      res.json({ status: "ok", data: products });
    });
  } catch (error) {
    return res.json({ status: "error", error });
  }
};

module.exports = getAllProducts;
