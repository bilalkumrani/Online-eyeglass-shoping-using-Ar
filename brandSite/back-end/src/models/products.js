const express = require("express");
const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  productId: { type: Number, required: true, unique: true },
  title: { type: String, required: true, unique: false },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
  description: { type: String, required: true, unique: false },
  category: { type: String, required: true, unique: false },
  subCategory: { type: String, required: true, unique: false },
  discountPercent: {
    type: Number,
    required: true,
    unique: false,
  },
  image: { type: String, required: true, unique: false },
  quantity: { type: Number, required: true, unique: false },
});

const Products = new mongoose.model("Products", productsSchema);

module.exports = Products;
