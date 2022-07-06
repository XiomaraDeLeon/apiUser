module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "rolesXpermisos",
      [
        {
          rolId: 25,
          permisoId: 29,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          rolId: 25,
          permisoId: 30,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          rolId: 25,
          permisoId: 31,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          rolId: 25,
          permisoId: 32,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          rolId: 26,
          permisoId: 29,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          rolId: 26,
          permisoId: 30,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          rolId: 26,
          permisoId: 31,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          rolId: 27,
          permisoId: 29,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
        {
          rolId: 27,
          permisoId: 30,
          createdAt: "2020-12-15",
          updatedAt: "2020-12-12",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("rolesXpermisos", null, {});
  },
};
