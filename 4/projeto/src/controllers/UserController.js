import User from "../model/User";

class UserController {
  async index(req, res) {
    const novoUser = await User.create({
      nome: 'jose',
      sobrenome: 'maria',
      email: 'josemaria@hotmail.com',
      password: '12345678'
    });
    res.json(novoUser);
  }
}

export default new UserController();
