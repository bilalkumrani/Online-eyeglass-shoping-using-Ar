const express = require("express");
const router = express.Router();

const Customers = require("../models/customers");

router.get("/customers", async (req, res) => {
  try {
    const getCustomers = await Customers.find({});
    res.send(getCustomers);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/customers/:customerId", async (req, res) => {
  try {
    const customerId = req.params.customerId;

    const getCustomer = await Customers.find({ customerId });
    res.send(getCustomer);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/customers", async (req, res) => {
  try {
    const getCustomers = await Customers.find({});
    let customer = { customerId: getCustomers.length + 1, ...req.body };

    const addingCustomer = new Customers(customer);
    const item = await addingCustomer.save();

    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
