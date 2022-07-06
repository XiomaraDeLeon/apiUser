const { config } = require("./config.env");

const development = {
  username: config.dbuser,
  password: config.dbPassword,
  database: config.dbName,
  host: config.dbHost,
  dialect: "mysql",
};

module.exports = { development };
