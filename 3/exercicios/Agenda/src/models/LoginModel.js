const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors =[];
    this.user = null;
  }

  register(){
    this.valida();
  }

  valida(){
    //validação
    //o email precisa ser valido
    //a senha precisa ter entre 8 a 10 caracteres
    this.cleanUp();
  }

  cleanUp(){
    //for para garantir q tudo q esta no body seja string
    for(){}
  }
}

module.exports = Login;