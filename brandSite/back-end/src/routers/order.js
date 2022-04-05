const express = require("express");
const router = express.Router();

const Orders = require("../models/orders");

router.post("/orders", async (req, res) => {
  try {
    const getOrders = await Orders.find({});

    try {
      var LastDocument = getOrders;
    } catch (error) {}

    if (LastDocument && LastDocument.length > 0) {
      var order = {
        orderId: getOrders[getOrders.length - 1].orderId + 1,
        ...req.body,
      };
    } else {
      var order = { orderId: 1, ...req.body };
    }

    const addingOrder = new Orders(order);
    const item = await addingOrder.save();

    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/orders", async (req, res) => {
  try {
    const getOrders = await Orders.find({});

    res.send(getOrders);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/orders/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const getOrder = await Orders.findOne({ orderId });
    res.send(getOrder);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/orders/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;

    console.log(orderId);
    const updateOrder = await Orders.findOneAndUpdate({ orderId }, req.body, {
      new: true,
    });
    console.log(updateOrder);
    res.send(updateOrder);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/orders/:orderId", async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const deleteOrder = await Orders.findOneAndDelete({ orderId });
    res.send(deleteOrder);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
