import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import productRoutes from "./routes/product.routes.js"
import categoryRoutes from "./routes/category.routes.js"
// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/products", productRoutes)
app.use("/api/category", categoryRoutes)

export default app;