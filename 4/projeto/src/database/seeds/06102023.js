const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('nomeDaTabela', [{
      nome: 'Joao',
      email: 'joao23@hotmail.com',
      password_hash: await bcryptjs.hash('123456789', 9),
      create_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Maria',
      email: 'jssdsd23@hotmail.com',
      password_hash: await bcryptjs.hash('123456789', 9),
      create_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Jo',
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
