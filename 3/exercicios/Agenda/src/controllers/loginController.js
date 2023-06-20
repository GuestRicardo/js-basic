const Login = require('../model/LoginModel');

exports.index = (req, res) => {
  res.render('login');
  return;
};
//aq esta sendo pego o o q esta sendo enviado no form register
exports.register = (req, res)=>{
  //instancia da classe
  const login = new Login(req.body);
  res.send(req.body);
}

