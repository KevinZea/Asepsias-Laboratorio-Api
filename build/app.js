"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _productRoutes = _interopRequireDefault(require("./routes/product.routes.js"));
var _categoryRoutes = _interopRequireDefault(require("./routes/category.routes.js"));
var _userAdminRoutes = _interopRequireDefault(require("./routes/userAdmin.routes.js"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cors = require('cors');
var app = (0, _express["default"])();

// Import routes

// Middlewares
app.use(cors());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());

// Routes
app.use("/api/products", _productRoutes["default"]);
app.use("/api/category", _categoryRoutes["default"]);
app.use("/api/user", _userAdminRoutes["default"]);
app.use("/api/auth", _authRoutes["default"]);
var _default = app;
exports["default"] = _default;