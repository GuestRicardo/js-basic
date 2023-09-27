import User from "../model/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create({
        nome: 'jose',
        sobrenome: 'maria',
        email: 'josemaria@hotmail.com',
        password: '12345678'
      });
      res.json(novoUser);
    } catch (erro) {
      res.status(400).json({
        erros: erro.errors.map((err) => err.mensage),
      });
    }
  }
}
//index
async index(req, res) {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (erro) {
    return res.json(null);
  }
}
//show
async show(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    return res.json(user);
  } catch (erro) {
    return res.json(null);
  }
}

export default new UserController();
