const boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");
const { config } = require("../config/config.env");

const secret = config.jwtSecret;

const isTokenValid = (permiso) => (req, res, next) => {
  const headerToken = req.headers.authorization;
  if (!headerToken) {
    throw boom.unauthorized("no tiene permitido esta accion");
  }
  const token = headerToken.split(" ")[1];
  try {
    const user = jwt.verify(token, secret);
    const { rol } = user;
    const { permisos } = rol;
    const userPermiso = permisos.find((item) => item.tipoPermisos === permiso);
    if (userPermiso) {
      next();
    } else {
      throw boom.unauthorized("no tiene permitido esta accion 1");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = isTokenValid;
