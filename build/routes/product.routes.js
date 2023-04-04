"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productController = require("../controllers/product.controller.js");
var router = (0, _express.Router)();
router.get("/", _productController.getProducts);
router.get("/category/:categoryId", _productController.getProductByCategory);
router.get("/:id", _productController.getProductById);
router.get("/title/:title", _productController.getProductByTitle);
router.post("/", _productController.createProduct);
router.put("/:id", _productController.updateProduct);
router["delete"]("/:id", _productController.deleteProduct);
var _default = router;
exports["default"] = _default;