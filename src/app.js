import express from "express";
import morgan from "morgan";
const cors = require('cors')

const app = express();

// Import routes
import productRoutes from "./routes/product.routes.js"
import categoryRoutes from "./routes/category.routes.js"
import userAdmin from "./routes/userAdmin.routes.js"
import authroutes from "./routes/auth.routes.js"
// Middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/products", productRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/user", userAdmin)
app.use("/api/auth", authroutes)

export default app;