module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "permisos",
      [
        {
          tipoPermisos: "create",
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          tipoPermisos: "read",
          createdAt: "2020-12-16",
          updatedAt: "2020-12-12",
        },
        {
          tipoPermisos: "update",
          createdAt: "2020-12-17",
          updatedAt: "2020-12-12",
        },
        {
          tipoPermisos: "delete",
          createdAt: "2020-12-18",
          updatedAt: "2020-12-12",
        },
      ],
      {}
    );
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("permisos", null, {});
  },
};
