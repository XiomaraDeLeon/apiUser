const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");

const secret = "academy";
const { User } = db;

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
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
