module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('people', [{
      name: 'Joao',
      isBetaMember: false
    }], {});
  },

  dow: () => {

  },
};
