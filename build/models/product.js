"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.product = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var product = _database.sequelize.define("product", {
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    defaultValue: _sequelize.DataTypes.UUIDV4
  },
  title: {
    type: _sequelize.DataTypes.STRING
  },
  description: {
    type: _sequelize.DataTypes.TEXT
  },
  image: {
    type: _sequelize.DataTypes.STRING
  },
  price: {
    type: _sequelize.DataTypes.INTEGER
  },
  certification: {
    type: _sequelize.DataTypes.STRING
  }
});
exports.product = product;