const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/try-on");
const db = mongoose.connection;

db.on("error", () => {
  console.log("there is error while connecting to db");
});
db.once("open", () => {
  console.log("successfully connected to database");
});
