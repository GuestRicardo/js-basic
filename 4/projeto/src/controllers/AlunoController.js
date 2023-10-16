import Aluno from "../model/Aluno";

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
  };
  //criando aluno
  async store(req, res) {
    try {
     const aluno = await Aluno.create(req.body)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err)=> err.message),
      })
    }
  }
  //mostrar um aluno
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
  //deletar aluno
  async delete(req, res) {
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
      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err)=> err.message),
      })
    }
  }
  //atualizar aluno
  async update(req, res) {
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

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err)=> err.message),
      })
    }
  }
}


export default new AlunoController();
