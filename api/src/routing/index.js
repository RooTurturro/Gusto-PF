const { Router } = require("express");
const productRouter = require("./routes/productRouter")

const router = Router();

router.use("/products" , productRouter)



module.exports = router;