const { Router } = require("express");
const { Purchase } = require('../../db')

const purchaseRouter = Router();


//create purchase

purchaseRouter.post('/', async (req, res) =>{
    try {
        const {name, lastname, products, specification, total, state} = req.body;
        const newPurchase= await Purchase.create({name, lastname, products, specification, total, state});
        res.status(201).send(newPurchase);
    } catch (error) {
        res.status(400).send(error)
    }
})


// productRouter.post("/", async (req, res)=>{  //ANDA
//     try {
//         const {name, description, price, image, state, category  } = req.body;
//         const newProduct = await Product.create({name, description, price, image, state, category})
//         res.status(201).send(newProduct);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// })

module.exports = purchaseRouter