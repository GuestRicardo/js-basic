const Login = require('../models/LoginModel');

exports.index = (req, res) => {
  res.render('login');
};
//aq esta sendo pego o o q esta sendo enviado no form register
exports.register = (req, res)=>{
  //instancia da classe
  const login = new Login(req.body);
  login.register();

  if(login.errors.length > 0){
    req.flash('errors', login.errors);
    req.session.save(function(){
      return res.redirect('back');
    });
    return;
  }

  res.send(login.errors);
}

