const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('nomeDaTabela', [{
      name: 'Joao',
      email: 'joao23@hotmail.com',
      password_hash: await bcryptjs.hash('123456789', 9),
      create_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Maria',
      email: 'jssdsd23@hotmail.com',
      password_hash: await bcryptjs.hash('123456789', 9),
      create_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: 'Jo',
      email: 'jodd23@hotmail.com',
      password_hash: await bcryptjs.hash('123456789', 9),
      create_at: new Date(),
      updated_at: new Date(),
    },

  ], {});
  },

  dow: () => {

  },
};
