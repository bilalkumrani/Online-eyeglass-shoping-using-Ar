const express = require("express");
const app = express();
const db = require("./config");
const homeRoutes = require("./Routes/homeRoutes");
const userRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productRoutes");
const adminRoutes = require("./Routes/adminRoutes");
const bodyParser = require("body-parser");
const authenticate = require("./Middleware/Authenticate");
const cors = require("cors");
const PORT = 4000;

app.use(bodyParser.json());
app.use(cors());
app.use("/", homeRoutes);
app.use("/admin", adminRoutes);
app.use("/user", authenticate, userRoutes);
app.use("/product", productRoutes);

app.listen(PORT, () => {
  console.log("listening on: ", PORT);
});
