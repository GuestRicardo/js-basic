import Sequelize, {
  Model
} from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 a 255 caracteres',
          },
        },
      },

      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'sobrenome precisa ter entre 3 a 255 caracteres',
          },
        },
      },
      email: {
        type:Sequelize.STRING,
        defaultValue: '',
        validate:{
          len:{
            msg: 'Email invalido',
          },
        },
      },
      idade: {
        type:Sequelize.STRING,
        defaultValue: '',
        validate:{
          len:{
            args:[3,255],
            msg: 'Nome precisa ter entre 3 a 255 caracteres',
          },
        },
      },
      peso: {
        type:Sequelize.STRING,
        defaultValue: '',
        validate:{
          len:{
            args:[3,255],
            msg: 'Nome precisa ter entre 3 a 255 caracteres',
          },
        },
      },
      altura: {
        type:Sequelize.STRING,
        defaultValue: '',
        validate:{
          len:{
            args:[3,255],
            msg: 'Nome precisa ter entre 3 a 255 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
