"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../controllers/auth.controller");
var _verifyUser = require("../middle/verifyUser.js");
var router = (0, _express.Router)();
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "access-token, Origin, Content-Type, Accept");
  next();
});
router.post("/register", _verifyUser.verifyUserExisting, _auth.register);
router.post("/login", _auth.login);
var _default = router;
exports["default"] = _default;