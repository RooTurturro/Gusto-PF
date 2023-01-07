const { Router } = require("express");
const {Product, Category, Toppings} = require('../../database/models/index')
const { getInfoDB , getInfoCategory} = require("../controllers/productsControllers")


const categoryRouter = Router();

categoryRouter.get("/", async (req, res) => {
  const allCategory = await getInfoCategory();
  try {
    res.status(200).json(allCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

categoryRouter.post("/", async (req, res) => {
  try {
    const { name, description, price, image, state } = req.body;
    const newCategory = await Category.create({
      name,
      description,
      price,
      image,
      state,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).send(error);
  }
});

categoryRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const categoryDelete = await Category.findByPk(id);
    if (!categoryDelete) {
      res.status(400).send("No existe la Categoria que deseas eliminar");
    } else {
      categoryDelete.destroy();
      return res.status(200).send("Categoria eliminado correctamente");
    }
  } catch (error) {
    res.status(400).json({ error: error.message }, "Entré al error de delete");
  }
});

categoryRouter.put("/", (req, res) => {
  res.send("Estamos en put de category");
});

module.exports = categoryRouter; 
