import { Sequelize } from "sequelize";

modules.exports ={
  up:(queryInterface, Sequelize) =>{
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  },
  down:(queryInterface)
}
