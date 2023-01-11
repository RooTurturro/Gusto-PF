const { Router } = require("express");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");
const toppingsRouter = require("./routes/toppingsRouter");
const usersRouter = require("./routes/usersRouter");
const sendGrid = require("./routes/sendGridRouter");

const router = Router();

router.use("/products", productRouter);
router.use("/categorys", categoryRouter);
router.use("/toppings", toppingsRouter);
router.use("/users", usersRouter);
router.use("/api/mail", sendGrid)

router.get("/", function(req, res) {
    res.redirect('http://localhost:3001/perfil')
  });

module.exports = router;