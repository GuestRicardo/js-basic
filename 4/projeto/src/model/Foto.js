import Sequelize, {
  Model
} from "sequelize";

export default class Foto extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo nao pode ficar vazio',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo nao pode ficar vazio',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        //nome do arquivo
        get(){
          return `${this.getDataValue('filename')}`;
        }
        //url q acompanha
      }
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }
  //associando foto a aluno
  static associate(models) {
    this.belongsTo(models.aluno, {
      foreignKey: 'aluno_id'
    });
  }
}
