const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
  return;
};
//aq esta sendo pego o o q esta sendo enviado no form register
exports.register = (req, res)=>{
  res.send(req.body);
}

