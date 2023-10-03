import User from "../model/User";

class TokenController {
  async store(req, res) {
    const {
      email = '', passsword = ''
    } = req.body;
    if (!email || !passsword) {
      return res.status(401).json({
        errors: ['Credenciais invalidas'],
      })
    }

    const user = await User.findOne({
      were: {
        email
      }
    });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuario nao existe'],
      })
    }

    res.json("teste");
  }
}

export default new TokenController();
