const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
};
//aq esta sendo pego o o q esta sendo enviado no form register
exports.register = (req, res)=>{
  //instancia da classe
  const login = new Login(req.body);
  login.register();
  res.send(login.errors);
}

