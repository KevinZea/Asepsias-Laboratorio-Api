import { userAdmin } from "../models/userAdmin.js"
import { encryptPassword } from "../libs/encryptPassword.js"


export async function getUsers(req, res) {
    try {
        const users = await userAdmin.findAll()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export async function createUser(req, res) {
    try {
        const { user, password } = req.body
        const newPassword = await encryptPassword(password)
        console.log(newPassword)
        const newUser = await userAdmin.create({
            user,
            password: newPassword
        })
        res.json(newUser)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}