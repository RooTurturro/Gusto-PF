const { Router } = require("express");
const { Purchase } = require('../../db')

const purchaseRouter = Router();

purchaseRouter.get("/", async (req, res)=>{ //ANDA
    
    try{
        const allPurchase = await Purchase.findAll(); 
        return res.status(200).send(allPurchase)
    } catch(error) {
        res.status(400).send(error)
    }
    })

    purchaseRouter.get('/:id', async (req, res)=>{ //ANDA
        const { id } = req.params
        try {
            if(id){
            const purchaseID = await Purchase.findByPk(id)
            res.status(200).send(purchaseID)
            }else{
            res.status(400).send('Purchase not found')
            }
        } catch (error) {
            res.status(400).send(error)
        }
    })
//create purchase

purchaseRouter.post('/', async (req, res) =>{
    try {
        const {name, lastname,address ,products, specification, total, takeAway, state} = req.body;
        const newPurchase= await Purchase.create({name, lastname, address, products, specification, total, takeAway, state});
        res.status(201).send(newPurchase);
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
})

purchaseRouter.put("/state/:id", async (req,res)=>{
    try {
        const { id } = req.params;
        const { state } = req.body;
        const findProduct = await Purchase.findByPk(id)
        await findProduct.update(
            { state },
            { where: { id: id } }
            );
        res.status(200).send("Estado modificado con exito");
        } 
        catch (error) {
        console.log("entre al error del put", error);
    }
});
module.exports = purchaseRouter