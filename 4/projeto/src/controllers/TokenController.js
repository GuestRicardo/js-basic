import User from "../model/User";

class TokenController {
  async store(req, res) {
    const {
      email = '', passsword = ''
    } = req.body;

    const user = await User.findOne( {were: {email}});

    res.json("teste");
  }
}

export default new TokenController();
