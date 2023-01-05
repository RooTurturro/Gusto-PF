const createError = require("http-errors");
const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routing/index");


const server = express();

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  secret: process.env.SECRET,
  /* idpLogout: true, */
};

server.use(auth(authConfig));

server.use(cors());

server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false, limit: "100mb" }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));

server.use("/", routes);


// catch 404 and forward to error handler
server.use(function (req, res, next) {
  next(createError(404));
});

// error handler
server.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.server.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = server;
