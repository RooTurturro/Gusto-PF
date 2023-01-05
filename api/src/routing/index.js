const { Router } = require("express");
const productRouter = require("./routes/productRouter")
const categoryRouter = require("./routes/categoryRouter")
const toppingsRouter = require("./routes/toppingsRouter")

const router = Router();

router.use("/products" , productRouter)
router.use("/categorys", categoryRouter)
router.use("/toppings", toppingsRouter)

module.exports = router;