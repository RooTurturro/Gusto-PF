const { Router } = require("express");
const { getInfoProducts } = require("../controllers/productsControllers")

const productRouter = Router();

productRouter.get("/",(req,res)=>{
    res.send("Estamos en ruta /products")
})

productRouter.post("/",(req,res)=>{
    res.send("Este es el post")
})



module.exports = productRouter;