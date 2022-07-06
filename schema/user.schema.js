const Joi = require("joi");

const id = Joi.number().integer();
const email = Joi.string().email();
const username = Joi.string().min(5);
const password = Joi.string().min(8);
const rolId = Joi.number().integer();

const creaUserSchema = Joi.object({
  email: email.required(),
  username: username.required(),
  password: password.required(),
  rolId: rolId.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  username: username,
  password: password,
  rolId: rolId,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { creaUserSchema, updateUserSchema, getUserSchema };
