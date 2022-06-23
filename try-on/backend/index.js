const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log("listening on: ", PORT);
});
