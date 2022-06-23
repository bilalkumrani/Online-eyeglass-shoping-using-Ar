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
      "https://res.cloudinary.com/doidlafka/image/upload/v1622565309/dummy-profile-pic-300x300-1_mplinc.png",
  },
});

mongoose.model("Product", productSchema);
