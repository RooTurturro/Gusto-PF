const { Router } = require("express");
const {Product , Category} = require('../../database/models/index')
const { getInfoDB } = require("../controllers/productsControllers")


const productRouter = Router();

productRouter.get("/", async (req, res)=>{
    const allProducts = await getInfoDB() 
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

productRouter.put("/update/:id", async (req,res)=>{
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      img,
      state      
    } = req.body;
    if (id) {
      let urlImage = "";

      if (img) {
        urlImage = img;
      } else {
        urlImage = "https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png";
      }

      if (name) {
        const findProduct = await Product.findByPk(id);
        await findProduct.update(
          {
            name,
            description,
            price,
            img,
            state 
          },
          { where: { id: id } }
        );

        /*const typeDb = await Category.findAll({
          where: { name: category },
        });*/

       /* await findProduct.setTypes(findProduct);*/
        res.status(200).send("Producto modificado con exito");
      } else {
        res.status(400).send("Faltaron datos para modificar el producto");
      }
    }
  } catch (error) {
    console.log("entre al error del put", error);
  }
});


module.exports = productRouter;