const { Router } = require("express");
const {Product, Category, Toppings} = require('../../database/models/index')
const { getInfoDB } = require("../controllers/productsControllers")


const toppingsRouter = Router();

toppingsRouter.get("/", (req, res) =>{
    res.send("Estamos en get de Toppings")
})

toppingsRouter.post("/", (req, res) =>{
    res.send("Estamos en post de Toppings")
})

toppingsRouter.delete("/", (req, res) =>{
    res.send("Estamos en delete de Toppings")
})

toppingsRouter.put("/", (req, res) =>{
    res.send("Estamos en put de Toppings")
})

module.exports = toppingsRouter ; 
