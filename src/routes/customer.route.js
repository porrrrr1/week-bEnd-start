const express = require('express');
const app = express.Router();
const controller = require('../controllers/customer.controller');

// defind routes here
// match GET localhost:4000/products
app.get("/", controller.get);
  
  // match GET localhost:4000/products/[id]
app.get("/:id", controller.getById);
app.get("/name/:name", controller.getByName);
app.post("/", controller.create);
app.put("/:id", controller.edit);
app.patch("/:id", controller.patchs);
app.delete("/:id", controller.deletes);

module.exports = app;