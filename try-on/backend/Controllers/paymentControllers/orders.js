const { RAZOR } = require("../../keys");
const Razorpay = require("razorpay");

const orders = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: RAZOR.RAZORPAY_KEY_ID,
      key_secret: RAZOR.RAZORPAY_SECRET,
    });

    const options = {
      amount: 50000, // amount in smallest currency unit
      currency: "PKR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = orders;
