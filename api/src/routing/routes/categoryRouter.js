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
=======
categoryRouter.get("/", async (req, res) =>{
    const allCategory = await getInfoCategory() 
    try{
    res.status(200).send(allCategory)
}
catch {res.status(400).send(error)}
})

categoryRouter.post("/", async (req, res)=>{
    try {
        const { name } = req.body;
        const newCategory = await Category.create({ name })
        res.status(201).send(newCategory);
    } 
    catch (error) {
        res.status(400).send(error);
    }
})

categoryRouter.delete("/delete/:id", async (req, res) =>{
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

  categoryRouter.put("/update/:id", async (req, res) =>{
    try {
      const { id } = req.params;
      const {
        name    
      } = req.body;
      if (id) {
       /* let urlImage = "";
  
        if (img) {
          urlImage = img;
        } else {
          urlImage = "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png";
        }*/
  
        if (name) {
          const findCategory = await Category.findByPk(id);
          await findCategory.update(
            {
              name   
            },
            { where: { id: id } }
          );
  
          /*const typeDb = await Toppings.findAll({
            where: { name: toppings },
          });*/
  
         /* await findTopping.setTypes(findTopping);*/
          res.status(200).send("Categoria modificado con exito");
        } else {
          res.status(400).send("Faltaron datos para modificar la categoria");
        }
      }
    } catch (error) {
      console.log("entre al error del put", error);
    }
  });


module.exports = categoryRouter; 
