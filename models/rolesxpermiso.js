const { Model } = require("sequelize");
const Rol = require("./role");
const Permiso = require("./permiso");

module.exports = (sequelize, DataTypes) => {
  class RolHasPermiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RolHasPermiso.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rolId: {
        field: "rolId",
        allowNull: true,
        type: DataTypes.INTEGER,
        references: {
          model: Rol,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      permisoId: {
        field: "permisoId",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: Permiso,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
      modelName: "rol_has_permiso",
      tableName: "rolesXpermisos",
    }
  );
  return RolHasPermiso;
};
