import { Router } from "express";
import { getProducts, getProductByCategory, getProductById, getProductByTitle, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = Router()

router.get("/", getProducts)
router.get("/category/:categoryId", getProductByCategory)
router.get("/:id", getProductById)
router.get("/title/:title", getProductByTitle)
router.post("/", createProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

export default router