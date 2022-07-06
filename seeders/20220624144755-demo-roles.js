module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "roles",
      [
        {
          nombreRol: "administrador",
          createdAt: "2020-12-12",
          updatedAt: "2020-12-12",
        },
        {
          nombreRol: "moderador",
          createdAt: "2020-12-13",
          updatedAt: "2020-12-12",
        },
        {
          nombreRol: "miembro",
          createdAt: "2020-12-14",
          updatedAt: "2020-12-12",
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
