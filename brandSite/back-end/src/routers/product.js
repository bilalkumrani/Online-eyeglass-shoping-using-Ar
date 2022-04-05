const express = require("express");
const router = express.Router();

const Products = require("../models/products");

router.post("/products", async (req, res) => {
  try {
    const getProducts = await Products.find({});

    try {
      var LastDocument = getProducts;
    } catch (error) {}

    if (LastDocument && LastDocument.length > 0) {
      var product = {
        productId: getProducts[getProducts.length - 1].productId + 1,
        ...req.body,
      };
    } else {
      var product = {
        productId: 1,
        ...req.body,
      };
    }

    const addingProduct = new Products(product);
    const item = await addingProduct.save();

    res.status(201).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/products", async (req, res) => {
  try {
    const getProducts = await Products.find({});
    res.send(getProducts);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/products/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const getProduct = await Products.findOne({ productId });
    res.send(getProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/products/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    const updateProduct = await Products.findOneAndUpdate(productId, req.body, {
      new: true,
    });
    res.send(updateProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/products/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const deleteProduct = await Products.findOneAndDelete({ productId });
    res.send(deleteProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
