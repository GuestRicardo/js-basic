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
        erros: erro.errors.map((err)=> err.mensage),
      });
    }
  }
}

export default new UserController();
