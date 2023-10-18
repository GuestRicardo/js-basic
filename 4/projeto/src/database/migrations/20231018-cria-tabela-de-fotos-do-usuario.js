modules.exports ={
  up:(queryInterface, Sequelize) =>{
    return queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces:{
          model:'alunos',
          key:'id',
        },
        ondelete: 'CASCATE',
        onupdate: 'CASCATE',

        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down:(queryInterface)=>{
    return queryInterface.dropTable('fotos');
  }
};

