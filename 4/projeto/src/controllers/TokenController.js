import User from "../model/User";

class TokenController {
  async store(req, res) {
    const {
      email = '', passsword = ''
    } = req.body;

    const user = await User.findOne();

    res.json("teste");
  }
}

export default new TokenController();
