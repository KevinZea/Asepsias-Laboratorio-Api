import { Router } from "express";
import { getCategorys, getCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/category.controller";

const router = Router()

router.get("/", getCategorys)
router.get("/:id", getCategoryById)
router.post("/", createCategory)
router.put("/:id", updateCategory)
router.delete("/:id", deleteCategory)

export default router