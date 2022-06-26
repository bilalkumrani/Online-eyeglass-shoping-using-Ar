const Product = require("../../Models/Product");

const edit = (req, res) => {
  if (req.body) {
    const { _id, name, price, color, pic } = req.body;
    Product.findByIdAndUpdate(
      _id,
      {
        name,
        price,
        color,
        pic,
      },
      (err, product) => {
        return res.json({ status: "Ok", document: product });
      }
    );
  } else {
    return res.json({ status: "error", error: "Data is missing" });
  }
};

module.exports = edit;
