import { Sequelize } from "sequelize";

modules.exports ={
  up:(queryInterface, Sequelize) =>{
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobreNome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      altura: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      peso: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    });
  },
  down:(queryInterface)=>{
    return queryInterface.dropTable('alunos');
  }
};
