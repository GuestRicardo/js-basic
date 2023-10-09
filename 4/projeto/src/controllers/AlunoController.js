import Aluno from "../model/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
  };
  async store(req, res) {}
  async show(req, res) {}
  async delete(req, res) {}
  async update(req, res) {}
}


export default new AlunoController();
