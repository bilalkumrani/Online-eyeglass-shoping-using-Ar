const Product = require("../../Models/Product");

const addProduct = async (req, res) => {
  if (req.body) {
    const { name, price, color, sku, tags, pic } = req.body;
    try {
      const product = await Product.create({
        name,
        price,
        color,
        tags,
        pic,
        sku
      });
      return res.json({ status: "ok", product });
    } catch (error) {
      return res.json({ status: "error", error });
    }
  }
};

module.exports = addProduct;
