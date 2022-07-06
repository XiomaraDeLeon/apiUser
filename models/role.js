const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, { as: "users", foreignKey: "rolId" });
      this.belongsToMany(models.permiso, {
        through: models.rol_has_permiso,
        foreignKey: "rolId",
        otherKey: "permisoId",
      });
      console.log("models");
    }
  }
  Rol.init(
    {
      nombreRol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "rol",
      tableName: "roles",
    }
  );
  return Rol;
};
