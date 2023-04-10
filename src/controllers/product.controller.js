import {product} from "../models/product.js"

export async function getProducts(req, res){
    try {
        const products = await product.findAll()
        res.json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export async function getProductById(req, res){
    console.log("hello world")
    try {
        let {id} = req.params
        const productResult =  await product.findOne({
            where: {
                id,
            }
        })
        //console.log(productResult)

        if(productResult !== null){
            res.json(productResult)
        }
        else{
            res.status(404).send("Producto no encontrado")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export async function getProductByTitle(req, res){
    try {
        const {title} = req.params
        const productResult = await product.findAll()
        const result = productResult.filter(p => p.title.toLowerCase().includes(title.toLowerCase()))
        if(result.length > 0){
            res.json(result)
        }
        else{
            res.status(404).json({message: "no hay productos con ese nombre"})
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function createProduct(req, res){
    const {title, description, price, image, certification, categoryId} = req.body
    try {
        const newProduct = await product.create(
            {
                title,
                description,
                price,
                image,
                certification,
                categoryId
            }

        )
        res.json(newProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function updateProduct(req, res){
    const {title, description, price, image, certification} = req.body
    const {id} = req.params

    try {
        const data = await product.findByPk(id)
        data.title = title
        data.description = description
        data.price = price
        data.image = image
        data.certification = certification

        await data.save()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function deleteProduct(req, res){
    try {
        const {id} = req.params
        await product.destroy({
            where:{
                id,
            }
        })
        return res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export async function getProductByCategory(req, res){
    try {
        const {categoryId} = req.params
        const data = await product.findAll({
            where:{
                categoryId,
            }
        })
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}