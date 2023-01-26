"use strict";
const createError = require("http-errors");
const express = require("express");
const helmet = require("helmet");
const { auth, requiresAuth } = require("express-openid-connect");
const path = require("path");
// const jade = require("jade");
/* const redirectHttps = require("redirect-https"); */
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const { json } = require("body-parser");
const routes = require("./routing/index");
const server = express();


server.use(helmet());
// server.set('view engine', 'jade');
server.use(cors());

const authConfig = {
	authRequired: false,
	auth0Logout: true,
	issuerBaseURL: process.env.ISSUER_BASE_URL,
	baseURL: process.env.BASE_URL,
	clientID: process.env.CLIENT_ID,
	secret: process.env.SECRET,
	/* idpLogout: true, */
};

const logTime = (req, res, next) => {
	console.log(
		`Date: ${new Date().toString()} - Method: ${req.method} - URL: ${req.url}`
	);
	next();
};

 const redirectHttps = (req, res, next) => {
 	if (req.headers["x-forwarded-proto"] !== "https") {
 		return res.redirect(`https://${req.headers.host}${req.url}`);
 	}
 	next();
 };

server.use(redirectHttps);
server.use(auth(authConfig));
server.use(logger("dev"));
server.use(express.urlencoded({ extended: false, limit: "100mb" }));
server.use(json({ limit: "100mb" }));
server.use(express.json());
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));
server.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});
server.use(logTime);

server.use("/", routes);

// catch 404 and forward to error handler
server.use(function (req, res, next) {
	next(createError(404));
});

// error handler
server.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.server?.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({
		message: err.message,
		error: err,
	});

	next();
});

module.exports = server;
