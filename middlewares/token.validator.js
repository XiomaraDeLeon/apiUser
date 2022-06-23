const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");

const secret = "academy";

const isTokenValid = (nameHeader) => (req, res, next) => {
  const headerToken = req.get(nameHeader);
  if (!headerToken) {
    throw boom.unauthorized("no tiene permitido esta accion");
  }
  const token = headerToken.split(" ")[1];
  try {
    jwt.verify(token, secret);
    next();
  } catch (err) {
    throw boom.unauthorized("no tiene permitido esta accion");
  }
};

module.exports = isTokenValid;
