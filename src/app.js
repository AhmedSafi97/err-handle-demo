const path = require("path");

const express = require("express");

const router = require("./router");

const app = express();

const PORT = 3000;

app.set("port", PORT);

app.disable('x-powered-by');

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/v1", router); // to handle api requests


// any request to non-existing static file, return the 404 page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "404.html"));
});

module.exports = app;
