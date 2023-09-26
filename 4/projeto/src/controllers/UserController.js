import Aluno from "../model/User";

class UserController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'jose',
      sobrenome: 'maria',
      email: 'josemaria@hotmail.com',
      password: '12345678'
    });
    res.json(novoAluno);
  }
}

export default new UserController();
