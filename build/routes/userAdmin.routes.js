"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _userAdminController = require("../controllers/userAdmin.controller.js");
var router = (0, _express.Router)();
router.get("/", _userAdminController.getUsers);
router.post("/", _userAdminController.createUser);
var _default = router;
exports["default"] = _default;