import { userAdmin } from "../models/userAdmin";

export async function verifyUserExisting(req, res, next){
    try {
        const {user} = req.body
        const userfound = await userAdmin.findOne({
            where:{
                user,
            }
        })
        if(userfound){
            return res.status(400).json({message: "El usuario ya existe"})
        }
        next()



    } catch (error) {
        res.status(500).json({message: error.message})
    }
}