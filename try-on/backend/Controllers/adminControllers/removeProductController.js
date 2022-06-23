const Product = require("../../Models/Product");

const removeProduct = async (req, res) => {
  if (req.body) {
    const { _id } = req.body;
    try {
      await Product.findByIdAndDelete({ _id });
      return res.json({ status: "ok" });
    } catch (error) {
      return res.json({ status: "error", error });
    }
  }
};

module.exports = removeProduct;
