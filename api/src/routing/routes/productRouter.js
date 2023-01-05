const { Router } = require("express");
const {Product, Category, Toppings} = require('../../database/models/index')
const { getInfoDB } = require("../controllers/productsControllers")


const productRouter = Router();

productRouter.get("/", async (req, res)=>{
    const allProducts = (await getInfoDB())
    try{
    res.status(200).send(allProducts)
}
catch {res.status(400).send(error)}
})
   

productRouter.post("/", async (req, res)=>{
    try {
        const {name, description, price, image, state  } = req.body;
        const newProduct = await Product.create({name, description, price, image, state})
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(400).send(error);
    }
})

productRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const productDelete = await Product.findByPk(id);
      if (!productDelete) {
        res.status(400).send("No existe el product que deseas eliminar");
      } else {
        productDelete.destroy();
        return res.status(200).send("Product eliminado correctamente");
      }
    } catch (error) {
      res.status(400).json({ error: error.message }, "Entré al error de delete");
    }
  });

productRouter.put("/",(req,res)=>{
    res.send("Estamos en el put ")
})



module.exports = productRouter;