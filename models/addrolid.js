"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class addRolId extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addRolId.init(
    {
      rolId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "addRolId",
    }
  );
  return addRolId;
};
