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
        type: Sequelize.FLOAT,
        allowNull: false
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      craated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      craated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down:(queryInterface)=>{
    return queryInterface.dropTable('alunos');
  }
};
