const { Router } = require("express");
const {Product, Category} = require('../../database/models/index')
const { getInfoProducts } = require("../controllers/productsControllers")


const productRouter = Router();

productRouter.get("/",(req,res)=>{
    res.send("Estamos en ruta /products")
})

productRouter.post("/", async (req, res)=>{
    try {
        const {name, description, price, image, state  } = req.body;
        const newProduct = await Product.create({name, description, price, image, state})
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

productRouter.delete("/",(req,res)=>{
    res.send("EStamos en delete de products")
})

productRouter.put("/",(req,res)=>{
    res.send("Estamos en el put ")
})



module.exports = productRouter;