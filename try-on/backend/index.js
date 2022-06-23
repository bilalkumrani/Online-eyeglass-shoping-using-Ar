const express = require("express");
const app = express();
const db = require("./config");
const homeRoutes = require("./Routes/homeRoutes");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const bodyParser = require("body-parser");
const PORT = 4000;

app.use(bodyParser.json());
app.use("/", homeRoutes);
//app.use("/user", userRoutes);
//app.use("/product", productRoutes);

app.listen(PORT, () => {
  console.log("listening on: ", PORT);
});
