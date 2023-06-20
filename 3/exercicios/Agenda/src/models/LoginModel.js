const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  register() {
    this.valida();
  }

  valida() {
    //validação
    //o email precisa ser valido
    //a senha precisa ter entre 8 a 10 caracteres
    this.cleanUp();
  }
//para limpar objeto
  cleanUp() {
    //for para garantir q tudo q esta no body seja string
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }
    //para garantir q tudo va para o bd
    this.body = {
      email: this.body.email,
      password: this.body.password
    };

  }
}

module.exports = Login;