const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
require("../src/db/conn");
app.use(express.json());
app.use(cors());

const categoryRouter = require("../src/routers/category");
const customerRouter = require("./routers/customer");
const productsRouter = require("./routers/product");
const ordersRouter = require("./routers/order");

app.use(categoryRouter);
app.use(customerRouter);
app.use(productsRouter);
app.use(ordersRouter);

app.listen(port, () => {
  console.log("Connection is stable at " + port);
});
