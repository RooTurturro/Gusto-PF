const { Router } = require("express");
const { getInfoProducts } = require("../controllers/productsControllers")

const productRouter = Router();

productRouter.get("/",(req,res)=>{
    res.send(getInfoProducts())
})



module.exports = productRouter;