import { Router } from "express";
import { createUser, getUsers } from "../controllers/userAdmin.controller.js";
import {verifyToken} from "../middle/authJwt"

const router = Router()

router.get("/",verifyToken, getUsers)
router.post("/",verifyToken, createUser)

export default router