"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _dotenv = require("dotenv");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
(0, _dotenv.config)();
var dbName = process.env.DBNAME;
var password = process.env.DB_PASSWORD;
var sequelize = new _sequelize["default"](dbName,
// db name,
"postgres",
// username
password,
// password
{
  host: "localhost",
  dialect: "postgres"
  // pool: {
  //   max: 5,
  //   min: 0,
  //   require: 30000,
  //   idle: 10000,
  // },
  // logging: false,
});
exports.sequelize = sequelize;