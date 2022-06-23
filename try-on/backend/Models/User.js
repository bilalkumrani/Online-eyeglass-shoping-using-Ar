const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/doidlafka/image/upload/v1622565309/dummy-profile-pic-300x300-1_mplinc.png",
  },
  cart: [{ type: ObjectId, ref: "Product" }],
  orders: [{ type: ObjectId, ref: "Product" }],
});

const user = mongoose.model("User", userSchema);
module.exports = user;
