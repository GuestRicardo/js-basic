import Sequelize, {
  Model
} from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade:{
          len: {
            args: [3, 15],
            msg: 'Campo deve ter entre 3 e 15 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade:{
          len: {
            args: [3, 15],
            msg: 'Campo deve ter entre 3 e 15 caracteres',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade:{
          len: {
            args: [3, 15],
            msg: 'Campo deve ter entre 3 e 15 caracteres',
          },
        },
      },
      //este campo abaixo nao vai existir na base de dados
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validade:{
          len: {
            args: [3, 15],
            msg: 'Campo deve ter entre 3 e 15 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
