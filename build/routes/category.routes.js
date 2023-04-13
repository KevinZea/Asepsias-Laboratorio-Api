"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _category = require("../controllers/category.controller");
var _authJwt = require("../middle/authJwt");
var router = (0, _express.Router)();
router.get("/", _category.getCategorys);
router.get("/:id", _category.getCategoryById);
router.post("/", _authJwt.verifyToken, _category.createCategory);
router.put("/:id", _authJwt.verifyToken, _category.updateCategory);
router["delete"]("/:id", _authJwt.verifyToken, _category.deleteCategory);
var _default = router;
exports["default"] = _default;