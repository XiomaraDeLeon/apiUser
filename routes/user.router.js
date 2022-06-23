const express = require("express");
const asyncHandler = require("../middlewares/exeption.handler");
const validatorHandler = require("../middlewares/validation.handler");
const isTokenValid = require("../middlewares/token.validator");
const {
  getUserSchema,
  creaUserSchema,
  updateUserSchema,
} = require("../schema/user.schema");

const {
  listUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../services/user.service");

const router = express.Router();

router.get(
  "/",
  isTokenValid("Authorization"),
  asyncHandler(async (req, res) => {
    const users = await listUsers();
    res.json(users);
  })
);

router.post(
  "/",
  [isTokenValid("Authorization"), validatorHandler(creaUserSchema, "body")],
  asyncHandler(async (req, res) => {
    const user = await createUsers(req.body);
    res.json(user);
  })
);

router.patch(
  "/:id/update",
  [
    isTokenValid("Authorization"),
    validatorHandler(getUserSchema, "params"),
    validatorHandler(updateUserSchema, "body"),
  ],

  asyncHandler(async (req, res, next) => {
    try {
      const user = await updateUsers(req.body, req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  })
);

router.delete(
  "/:id/delete",
  isTokenValid("Authorization"),
  asyncHandler(async (req, res) => {
    const user = await deleteUsers(req.params.id);
    res.json(user);
  })
);

module.exports = router;
