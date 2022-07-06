const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.rol, { through: "roles_has_permisos" });
      console.log(models);
    }
  }
  Permiso.init(
    {
      tipoPermisos: {
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
      modelName: "permiso",
      tableName: "permisos",
    }
  );
  return Permiso;
};
