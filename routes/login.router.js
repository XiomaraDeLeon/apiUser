const express = require("express");
const asyncHandler = require("../middlewares/exeption.handler");
const validatorHandler = require("../middlewares/validation.handler");
const login = require("../services/login.service");
const loginEschema = require("../schema/login.schema");

const router = express.Router();

router.post(
  "/",
  validatorHandler(loginEschema, "body"),
  asyncHandler(async (req, res) => {
    const user = await login(req.body);
    res.json(user);
  })
);

module.exports = router;
