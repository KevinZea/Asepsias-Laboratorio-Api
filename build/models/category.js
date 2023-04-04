"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.category = void 0;
var _sequelize = require("sequelize");
var _database = require("../database/database.js");
var _product = require("./product.js");
var category = _database.sequelize.define("category", {
  id: {
    type: _sequelize.DataTypes.UUID,
    primaryKey: true,
    defaultValue: _sequelize.DataTypes.UUIDV4
  },
  title: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
});
exports.category = category;
category.hasMany(_product.product, {
  foreinkey: "category",
  sourceKey: "id"
});
_product.product.belongsTo(category, {
  foreinkey: "category",
  targetId: "id"
});