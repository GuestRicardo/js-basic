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
    if (!(await user.passwordIsValide(passsword))) {
      return res.status(401).json({
        errors: ['Senha Invalida'],
      })
    }
    const {id} = user
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET,{
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json(token);
  }
}

export default new TokenController();
