import jwt from "jsonwebtoken";
import { userAdmin } from "../models/userAdmin";
import { config } from "dotenv";
import { comparePassword, encryptPassword } from "../libs/encryptPassword";

config()
const secretWord = process.env.SECRET_WORD

export async function register(req, res){
    try {
        const {user, password} = req.body
        const passwordCrypt = await encryptPassword(password)
        const newUser = await userAdmin.create({
            user,
            password: passwordCrypt
        })
        const token = jwt.sign({id: newUser.id}, secretWord,{
            expiresIn: 300     //86400
        })
        res.json(token)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function login(req, res){
    try {
        const {user, password} = req.body
        const userfound = await userAdmin.findOne({
            where:{
                user
            }
        })
        if(!userfound) return res.status(400).json({message: "usuario no existe"})
        const matchPassword = await comparePassword(password, userfound.password)
        if(!matchPassword){
            return res.status(401).json({
                token: null,
                message: "contraseña invalida"
            })
        }

        const token = jwt.sign({id: userfound.id}, secretWord,{
            expiresIn: 300     //86400
        })
        res.json({token})

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}