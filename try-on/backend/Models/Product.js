const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  color: {
    type: String,
  },
  pic: {
    type: String,
    default:
      "https://media.istockphoto.com/photos/eyeglasses-isolated-on-white-background-with-clipping-path-picture-id1304136213?b=1&k=20&m=1304136213&s=170667a&w=0&h=-bgkU3YIweB63JV9z-rD0AT2nh-XGhxULv22weDP6v0=",
  },
});

const product = mongoose.model("Product", productSchema);
module.exports = product;
