const nome = 'Luiz';
const sobrenome = 'Mercenas';

const fala = ()=> nome +' '+ sobrenome;


module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.fala = fala;

class Pessoa {
    constructor(nome){
      this.nome= nome;
    }  
  }
//exportando class
 exports.Pessoa = Pessoa; 
  