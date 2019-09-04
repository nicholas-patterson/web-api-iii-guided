const express = require("express");
const server = express();

server.get("/products", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/clients", (req, res) => {
  res.status(200).json({ api: "running" });
});

server.get("/suppliers", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
