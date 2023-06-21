const mongoose = require('mongoose');
const validator = require('validator');

//model
const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.valida();
    if (this.errors.length > 0) return;

    try{
      this.user = await LoginModel.create(this.body);
    }
    catch(erro){
      console.log(erro);
    }
  }

  //validação
  valida() {
    //limpando os campos
    this.cleanUp();

    //o email precisa ser valido
    if (!validator.isEmail(this.body.email)) this.errors.push('Email inválido');

    //a senha precisa ter 8 ou mais caracteres
    if (this.body.password.length < 8 || this.body.password.length > 25) {
      this.errors.push('A senha precisa ter entre 8 e 25 caracteres');
    }
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