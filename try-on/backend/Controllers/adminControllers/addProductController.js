const Product = require("../../Models/Product");

const addProduct = async (req, res) => {
  if (req.body) {
    const { name, price, color } = req.body;
    try {
      const product = await Product.create({
        name,
        price,
        color,
      });
      return res.json({ status: "ok", product });
    } catch (error) {
      return res.json({ status: "error", error });
    }
  }
};

module.exports = addProduct;
