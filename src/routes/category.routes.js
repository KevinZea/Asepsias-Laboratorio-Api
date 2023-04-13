import { Router } from "express";
import { getCategorys, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/category.controller";
import {verifyToken} from "../middle/authJwt"

const router = Router()

router.get("/", getCategorys)
router.get("/:id", getCategoryById)
router.post("/", verifyToken, createCategory)
router.put("/:id", verifyToken, updateCategory)
router.delete("/:id", verifyToken, deleteCategory)

export default router