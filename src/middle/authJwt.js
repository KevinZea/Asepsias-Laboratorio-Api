import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()
import { userAdmin } from "../models/userAdmin";

const secretWord = process.env.SECRET_WORD

export async function verifyToken(req, res, next){
    let token = req.headers["access-token"]
    if(!token){
        return res.status(403).json({message: "Token no provisionado"})
    }
    try {
        const decoded = jwt.verify(token, secretWord)
        req.userId = decoded.id

        const user = await userAdmin.findOne({
            where:{
                id: req.userId
            }
        })
        if(!user){
            return res.status(404).json({message: "Usuario no encontrado"})
        }
        next()
    } catch (error) {
        res.status(401).json({message: "autorización invalida"})
        console.log(error)
    }
}