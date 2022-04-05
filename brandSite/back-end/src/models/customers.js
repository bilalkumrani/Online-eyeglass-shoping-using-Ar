const express = require("express");
const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
  customerId: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
});

const Customers = new mongoose.model("Customers", customersSchema);

module.exports = Customers;
