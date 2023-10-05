import User from "../model/User";

//store
class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({id, nome, email});
    } catch (erro) {
      res.status(400).json({
        erros: erro.errors.map((err) => err.mensage),
      });
    }
  }

  //index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (erro) {
      return res.json(null);
    }
  };
  //show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      const {id, nome, email} = user;

      return res.json(id, nome, email);
    } catch (erro) {
      return res.json(null);
    }
  };
  //update
  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['USUÁRIO não existe.'],
        });
      }
      const novosDados = await user.update(req.body);
      const {id, email, nome} = novosDados;
      return res.json({ id, email, nome});
    } catch (erro) {
      res.status(400).json({
        erros: erro.errors.map((err) => err.mensage),
      });
    }
  };

  //delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['USUÁRIO não existe.'],
        });
      }
      await user.destroy();
      return res.json({null});
    } catch (erro) {
      res.status(400).json({
        erros: erro.errors.map((err) => err.mensage),
      });
    }
  }

};
export default new UserController();
