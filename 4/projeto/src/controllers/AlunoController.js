import Aluno from "../model/Aluno";

class AlunoController {
 async index(req, res){
  const novoAluno = await Aluno.create({
    nome: 'jose',
    sobrenome: 'maria',
    email: 'josemaria@hotmail.com',
    idade: 45,
    peso: 89,
    altura: 1.78,
  });
    res.json(novoAluno);
  }
}

export default new AlunoController();
