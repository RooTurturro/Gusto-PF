"use strict";
const { Router } = require("express");
const productRouter = require("./routes/productRouter");
const purchaseRouter = require("./routes/purchaseRouter");
const cloudinaryRouter = require("./routes/cloudinaryRouter");

const toppingsRouter = require("./routes/toppingsRouter");
const usersRouter = require("./routes/usersRouter");
const sendGrid = require("./routes/sendGridRouter");

const router = Router();

const PaymentController = require("../routing/Controllers/PaymentsController");
const PaymentService = require("./Services/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentService());

router.use("/products", productRouter);

router.use("/images", cloudinaryRouter);
router.use("/toppings", toppingsRouter);
router.use("/users", usersRouter);
router.use("/api/mail", sendGrid);
router.use("/purchase", purchaseRouter);

router.get("/", function (req, res) {
	res.redirect("http://localhost:3000/perfil");
});

router.post("/payment", function (req, res, next) {
	PaymentInstance.getPaymentLink(req, res);
});

router.get("/subscription", function (req, res, next) {
	PaymentInstance.getSubscriptionLink(req, res);
});

module.exports = router;
