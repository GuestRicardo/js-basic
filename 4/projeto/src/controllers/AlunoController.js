import Aluno from "../model/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
  };
  async store(req, res) {}
  async show(req, res) {
    try {
      const {
        id
      } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['faltando ID'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno Não existe'],
        });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err)=> err.message),
      })
    }
  }
  async delete(req, res) {

  }
  async update(req, res) {}
}


export default new AlunoController();
