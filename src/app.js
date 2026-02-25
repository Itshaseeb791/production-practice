const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/health", (req, res) => {
  res.send("API running on production v3");
});

module.exports = app;
