import Sequelize, {
  Model
} from "sequelize";
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validade: {
          len: {
            args: [3, 15],
            msg: 'Campo deve ter entre 3 e 15 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique:{
          msg: 'Email já existe',
        },
        validade: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      //este campo abaixo nao vai existir na base de dados
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validade: {
          len: {
            args: [8, 15],
            msg: 'A senha precisa ter entre 8 e 15 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      if(user.password){
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValide(passsword){
    return bcryptjs.compare(passsword, this.password_hash);
  }
}
