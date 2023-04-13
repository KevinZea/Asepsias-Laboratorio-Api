import { Router } from "express";
import { getProducts, getProductByCategory, getProductById, getProductByTitle, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";
import {verifyToken} from "../middle/authJwt"

const router = Router()

router.get("/", getProducts)
router.get("/category/:categoryId", getProductByCategory)
router.get("/:id", getProductById)
router.get("/title/:title", getProductByTitle)
router.post("/", verifyToken, createProduct)
router.put("/:id", verifyToken, updateProduct)
router.delete("/:id", verifyToken, deleteProduct)

export default router