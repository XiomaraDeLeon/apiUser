const { Sequelize } = require("sequelize");
// recordar mover a una variable de entorno
const URI = "mysql://root:secret@localhost:3306/api";

const sequelize = new Sequelize(URI, {
  dialect: "mysql",
  logging: true,
});

module.exports = sequelize;
