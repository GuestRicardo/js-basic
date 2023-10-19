import Sequelize, {
  Model
} from "sequelize";

export default class Foto extends Model {
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

   
    }, {
      sequelize,
    });
    return this;
  }
}
