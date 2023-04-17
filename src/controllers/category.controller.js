import { category } from "../models/category";
import { product } from "../models/product";
export async function getCategorys(req, res){
    try {
        const categorys = await category.findAll()
        res.json(categorys)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getCategoryById(req, res){
    try {
        const {id} = req.params
        const data = await category.findOne({
            where:{
                id,
            }
        })
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function createCategory(req, res){
    try {
        const {title, description} = req.body
        const newCategory = await category.create(
            {
                title,
                description
            }
        )
        res.json(newCategory)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function updateCategory(req, res){
    try {
        const {id} = req.params
        const {title, description} = req.body
        const data = await category.findByPk(id)
        data.title = title
        data.description = description
        await data.save()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteCategory(req, res){
    try {
        const {id} = req.params
        
        await product.destroy({
            where:{
                categoryId: id
            }
        })
        await category.destroy({
            where:{
                id
            }
        })
        return res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}