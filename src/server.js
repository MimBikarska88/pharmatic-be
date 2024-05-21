const express = require("express");
const app = express();
const port = 8080;
app.get("/", (req, res) => {
  res.json({ data: "hello" });
  res.send();
});
app.listen(8080);
