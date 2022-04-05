const express = require("express");
const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  subCategories: {
    type: Array,
  },
});

const Categories = new mongoose.model("Categories", categoriesSchema);

module.exports = Categories;
