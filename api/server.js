const express = require("express");
const server = express();
const productsRouter = require("../products/productsRouter");
const suppliersRouter = require("../suppliers/suppliersRouter");

// global middleware
server.use("/products", productsRouter);
server.use("/suppliers", suppliersRouter);

module.exports = server;
