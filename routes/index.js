const express = require("express");
const UserRoutes = require("./user.router");
const loginRouter = require("../routes/login.router");

// const app = express.Router();

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/users", UserRoutes);
  router.use("/login", loginRouter);
}

module.exports = routerApi;
