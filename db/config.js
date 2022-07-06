const { Sequelize } = require("sequelize");
// recordar mover a una variable de entorno
const { config } = require("../config/config.env");

const URI = `mysql://${config.dbuser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: "mysql",
  logging: true,
});

module.exports = sequelize;
