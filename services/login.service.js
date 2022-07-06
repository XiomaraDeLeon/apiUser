const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
const role = require("../models/role");
const { config } = require("../config/config.env");

const secret = config.jwtSecret;
const { User, rol, permiso } = db;

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email },
    include: [
      {
        model: rol,
        include: [{ model: permiso }],
      },
    ],
  });
  console.log(user);
  if (!user) {
    throw boom.badData("email no se encuentra en nuestros registros");
  } else {
    const comparePassword = await bcrypt.compare(password, user.password);
    if (comparePassword) {
      const { password, ...UserWithoutPassword } = user.get({ plain: true });
      const token = jwt.sign(UserWithoutPassword, secret, { expiresIn: "3h" });
      return { token };
    }
    throw boom.badData("la contrasenia no es correcta");
  }
};

module.exports = login;
