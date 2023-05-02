const nome = 'Maria';
const sobrenome = 'Jose';
const idade = 89;

function soma(x, y){
    return x + y;
}

export { nome as nome2, sobrenome, idade, soma };
//aq esta sendo exportado a variavel com outro nome, no caso o nome

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}