import Sequelize, {
  Model
} from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobreNome: Sequelize.STRING,
      email: Sequelize.STRING,
      altura: Sequelize.FLOAT,
      peso: Sequelize.FLOAT,
      idade: Sequelize.INTEGER,
    }, {
      sequelize,
    });
    return this;
  }
}
