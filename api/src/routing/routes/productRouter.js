const { Router } = require("express");
const { Product } = require("../../db");

// anda todo

const productRouter = Router();

productRouter.get("/", async (req, res) => {
	//ANDA
	const { name } = req.query;
	const allProducts = await Product.findAll();
	try {
		if (name) {
			const product = allProducts.filter(
				(e) => e.name.toLowerCase() === name.toLowerCase()
			);
			product.length
				? res.status(200).send(product)
				: res.send("Product not found");
		} else {
			const products = allProducts;
			return res.status(200).send(products);
		}
	} catch (error) {
		res.status(400).send(error);
	}
});

productRouter.get("/:id", async (req, res) => {
	//ANDA
	const { id } = req.params;
	try {
		if (id) {
			const productId = await Product.findByPk(id);
			res.status(200).send(productId);
		} else {
			res.status(400).send("Product not found");
		}
	} catch (error) {
		res.status(400).send(error);
	}
});


productRouter.post("/", async (req, res) => {
	//ANDA
	try {
		const { name, description, price, image, state, category, rating } =
			req.body;
		const newProduct = await Product.create({
			name,
			description,
			price,
			image,
			state,
			category,
			rating,
		});
		res.status(201).send(newProduct);
	} catch (error) {
		res.status(400).send(error);
		console.log(error)
	}
});

productRouter.delete("/delete/:id", async (req, res) => {
	//ANDA
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

productRouter.put("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { name, description, price, img, state, category, rating } = req.body;
		if (id) {
			let urlImage = "";

			if (img) {
				urlImage = img;
			} else {
				urlImage =
					"https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c31f.png";
			}

			if (name) {
				const findProduct = await Product.findByPk(id);
				await findProduct.update(
					{
						name,
						description,
						price,
						img,
						state,
						category,
					},
					{ where: { id: id } }
				);

				res.status(200).send("Producto modificado con exito");
			} else {
				res.status(400).send("Faltaron datos para modificar el producto");
			}
		}
	} catch (error) {
		console.log("entre al error del put", error);
	}
});

productRouter.put("/state/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { state } = req.body;
		const findProduct = await Product.findByPk(id);
		await findProduct.update({ state }, { where: { id: id } });
		res.status(200).send("Estado modificado con exito");
	} catch (error) {
		console.log("entre al error del put", error);
	}
});

productRouter.put("/rating/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { rating } = req.body;
		const findProduct = await Product.findByPk(id);
		await findProduct.update({ rating }, { where: { id: id } });
		res.status(200).send("rating modificado con exito");
	} catch (error) {
		console.log("entre al error del put", error);
	}
});

module.exports = productRouter;
