const { Router } = require("express");
const {Product, Category, Toppings} = require('../../database/models/index')
const { getInfoDB , getInfoToppings } = require("../controllers/productsControllers")


const toppingsRouter = Router();

toppingsRouter.get("/", async (req, res) =>{
    const allToppings = await getInfoToppings();
    try{
    res.status(200).send(allToppings);
}
catch {res.status(400).send(error)}
});

toppingsRouter.post("/", async (req, res) =>{
    try {
        const { name } = req.body;
        const newTopping = await Toppings.create({ name })
        res.status(201).send(newTopping);
    } 
    catch (error) {
        res.status(400).send(error);
    }
});


toppingsRouter.delete("/", async (req, res) =>{
    const { id } = req.params;
    try {
      const toppingDelete = await Toppings.findByPk(id);
      if (!toppingDelete) {
        res.status(400).send("No existe el topping que deseas eliminar");
      } else {
        toppingDelete.destroy();
        return res.status(200).send("Topping eliminado correctamente");
      }
    } catch (error) {
      res.status(400).json({ error: error.message }, "Entré al error de delete");
    }
  });


toppingsRouter.put("/", (req, res) =>{
    res.send("Estamos en put de Toppings")
})

module.exports = toppingsRouter ; 
