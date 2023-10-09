
modules.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.changeColumn('users', 'email',

            {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true
            },
          );
        },
        down: () => {

        }
    };
