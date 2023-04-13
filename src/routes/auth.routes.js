import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { verifyUserExisting } from "../middle/verifyUser.js";

const router = Router()

router.use((req, res, next) =>{
    res.header(
        "Access-Control-Allow-Headers",
        "access-token, Origin, Content-Type, Accept"
    )
    next()
})

router.post("/register", verifyUserExisting, register)
router.post("/login", login)
export default router