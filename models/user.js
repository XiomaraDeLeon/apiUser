const { Model } = require("sequelize");
const Rol = require("./role");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.rol, {
        foreignKey: "rolId",
      });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rolId: {
        field: "rolId",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: Rol,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      scopes: {
        withoutPassword: {
          attributes: { exclude: ["password"] },
        },
      },
    }
  );
  return User;
};
