"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAdmin = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var userAdmin = _database.sequelize.define("userAdmin", {
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    defaultValue: _sequelize.DataTypes.UUIDV4
  },
  user: {
    type: _sequelize.DataTypes.STRING
  },
  password: {
    type: _sequelize.DataTypes.STRING
  }
});
exports.userAdmin = userAdmin;