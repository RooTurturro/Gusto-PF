/* const { Router } = require("express");
const { Category ,Toppings} = require('../../db')


const toppingsRouter = Router();

toppingsRouter.get("/", async (req, res) =>{ //ANDA
    const allToppings = await Toppings?.findAll();
    try{
    res.status(200).send(allToppings);
}
catch {res.status(400).send(error)}
}); */

/* toppingsRouter.post("/", async (req, res) => { //ANDA
  try {
    const { name } = req.body;
    const newTopping = await Toppings.create({ name });
    res.status(201).json(newTopping);
  } catch (error) {
    res.status(400).send(error);
  }
}); */


/* toppingsRouter.delete("/delete/:id", async (req, res) =>{ //ANDA
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
  }); */
/* 
toppingsRouter.put("/update/:id", async (req, res) =>{ //ANDA
  try {
    const { id } = req.params;
    const {
      name    
    } = req.body;
    if (id) { */
     /* let urlImage = "";

      if (img) {
        urlImage = img;
      } else {
        urlImage = "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png";
      }*/

      /* if (name) {
        const findTopping = await Toppings.findByPk(id);
        await findTopping.update(
          {
            name   
          },
          { where: { id: id } }
        ); */

        /*const typeDb = await Toppings.findAll({
          where: { name: toppings },
        });*/

       /* await findTopping.setTypes(findTopping);*/
        /* res.status(200).send("Topping modificado con exito");
      } else {
        res.status(400).send("Faltaron datos para modificar el Topping");
      }
    }
  } catch (error) {
    console.log("entre al error del put", error);
  }

}); */

/* module.exports = toppingsRouter;  */
