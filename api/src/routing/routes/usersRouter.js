const { Router } = require("express");
const userRouter = Router();
const { requiresAuth } = require("express-openid-connect");
const { User } = require('../../db')


userRouter.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

userRouter.get("/admins", requiresAuth(), async (req, res) => {
  /* res.send(JSON.stringify(req.oidc.user, null, 2)); */
  const getAdmin = await User.findAll({
    where: {
      isAdmin: true,
    },
  });
  getAdmin ? res.status(200).json(getAdmin) : res.status(404).send("Not Found");
});

userRouter.get("/profile", requiresAuth(), async (req, res) => {
  const userName = await JSON.stringify(req.oidc.user);
  console.log(JSON.stringify(req.oidc.user));
  res.status(200).send(userName);
});

module.exports = userRouter;