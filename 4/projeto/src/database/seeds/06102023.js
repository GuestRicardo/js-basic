module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('nomeDaTabela', [{
      name: 'Joao',
      isBetaMember: false
    }], {});
  },

  dow: () => {

  },
};
