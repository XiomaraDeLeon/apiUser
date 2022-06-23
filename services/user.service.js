const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const db = require("../models");

const saltRounds = 10;

const { User } = db;

const listUsers = async () => {
  const users = await User.scope("withoutPassword").findAll();
  return users;
};

const createUsers = async (data) => {
  const hashPassword = await bcrypt.hash(data.password, saltRounds);
  const createUser = { ...data, password: hashPassword };
  console.log(hashPassword);
  const user = await User.create(createUser);
  const { password, ...UserWithoutPassword } = user.get({ plain: true });
  return UserWithoutPassword;
};

const getUser = async (id) => {
  const user = await User.scope("withoutPassword").findByPk(id);
  if (!user) {
    throw boom.notFound("usuario no encontrado");
  }
  return user;
};

const updateUsers = async (data, id) => {
  const hashPassword = await bcrypt.hash(data.password, saltRounds);
  const UserUpdate = { ...data, password: hashPassword };
  const user = await getUser(id);
  const UserChange = await user.update(UserUpdate);
  const { password, ...inter } = UserChange.get({ plain: true });
  return inter;
};

const deleteUsers = async (id) => {
  const user = await getUser(id);
  const userDelete = await user.destroy({ where: { id } });
  return userDelete;
};

module.exports = { listUsers, createUsers, updateUsers, deleteUsers };
