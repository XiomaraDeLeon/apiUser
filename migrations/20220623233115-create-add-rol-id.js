module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "rolId", {
      type: Sequelize.INTEGER,
      references: {
        model: "roles",
        key: "id",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "rolId", {});
  },
};
