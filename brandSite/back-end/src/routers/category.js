const express = require("express");
const router = express.Router();

const Categories = require("../models/categories");

//Post Category
router.post("/categories", async (req, res) => {
  try {
    const addingCategory = new Categories(req.body);
    const item = await addingCategory.save();
    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Get Category
router.get("/categories", async (req, res) => {
  try {
    const getCategories = await Categories.find({});
    res.send(getCategories);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Get particular Category by category name
router.get("/categories/:name", async (req, res) => {
  try {
    const category = req.params.name;
    const getCategory = await Categories.find({ category });
    res.send(getCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Update particular Category by category name
router.patch("/categories/:name", async (req, res) => {
  try {
    const category = req.params.name;

    const updateCategory = await Categories.findOneAndUpdate(
      category,
      req.body,
      { new: true }
    );
    res.send(updateCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/categories/:name", async (req, res) => {
  try {
    const category = req.params.name;

    const updateCategory = await Categories.findOneAndUpdate(
      category,
      req.body,
      { new: true }
    );
    res.send(updateCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Delete particular category by category name
router.delete("/categories/:name", async (req, res) => {
  try {
    const category = req.params.name;
    const deleteCategory = await Categories.findOneAndDelete({ category });
    res.send(deleteCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
