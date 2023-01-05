const { Router } = require("express");
const {Product, Category, Toppings} = require('../../database/models/index')
const { getInfoDB } = require("../controllers/productsControllers")


const categoryRouter = Router();

categoryRouter.get("/", (req, res) =>{
    res.send("Estamos en get de category")
})

categoryRouter.post("/", (req, res) =>{
    res.send("Estamos en post de category")
})

categoryRouter.delete("/", (req, res) =>{
    res.send("Estamos en delete de category")
})

categoryRouter.put("/", (req, res) =>{
    res.send("Estamos en put de category")
})


module.exports = categoryRouter ; 
