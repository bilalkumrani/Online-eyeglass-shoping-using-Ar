const express = require("express");
const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  orderId: { type: Number, required: true, unique: true },
  customerId: { type: Number, required: true, unique: false },
  products: { type: Array },
  orderDate: { type: Date, required: true },
  deliverDate: { type: Date },
  totalAmount: { type: Number, required: true, unique: false },
  status: { type: String, required: true, unique: false },
});

const Orders = new mongoose.model("Orders", ordersSchema);

module.exports = Orders;
