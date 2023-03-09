//Objeto literal
const pessoas = { //corpo do objeto
    //chaves para acesso ao objeto
    nome: 'Maria',
    sobrenome: 'Joaquina'
};
//formas de acesso as chaves do objeto(anotação de ponto e colchetes)
//por ponto(é a forma mais indicada)
console.log(pessoas.nome);
//mas tambem da pra acessar por colchetes(ela é mais interessante usar no caso de valores dinamicos )
console.log(pessoas['sobrenome']);

//um exemplo bom para usar o colchetes é qaundo vai ter uma chave que nao sabe qual sera, no caso de uma conexao ao banco de dados
//exemplo
const chaveDB = 'nome';
console.log(pessoas[chaveDB]); //o resultado desta forma é o mesmo, dos exemplos anteriores

//================================================================================================================================================
//usando construtor
const pessoa2 = new Object();
pessoa2.nome = 'Jose';
pessoa2.sobrenome = 'Matias';
pessoa2.idade = 36;
//===================================================================================================================================================
//deletando itens
delete pessoa2.sobrenome; //neste exemplo foi apagado a chave nome
//===================================================================================================================================================
//objetos com metodos
//metodos sao funções q estao dentro do objeto q executa açãoes
//a desvantagem, é que muito mais dificil ter acesso as chaves do metodo dentro do objeto
pessoa2.falarNome = function () {
    return (`${this.nome} esta função esta retornando seu nome`);
}; // o this se refere a chave
console.log(pessoa2.falarNome());

//segundo exemplo:
pessoa2.getDataNascimento = function () {
    const datAtual = new Date();
    return datAtual.getFullYear() - this.idade;
};
console.log(`O ano que ${pessoa2.nome} nasceu é ${pessoa2.getDataNascimento()}`); //para saber a data de nascimento

console.log('##########################################################################################################');
//para saber todas as chaves do objeto
console.log('Lista de chaves do objeto');
for (let chave in pessoa2) {
    console.log(chave);
};

console.log('##########################################################################################################');
//E para criar moldes de objetos, existe 2 funções e classe para resouver esse problema, pois o codigo ficará muito mais rapido e performatico
//para isso usa-se a função fabrica, função construtora e classes essas duas sao padrões de projetos.

//factor function(fabrica)
function criaPessoa(cpf, nome, sobrenome) {
    return {
        cpf,
        nome,
        sobrenome,
        get dadosCompleto(){
            return `${this.cpf}, ${this.nome}, ${this.sobrenome}`
        }
    }
}
const p1 = criaPessoa('54185465', 'Luiz', 'Alberto');
console.log(p1.dadosCompleto);

//constructor function(construtora)
function Nova(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;    
}
//palavra new vai criar um objeto vazio, e vai atrelar a palavra this dentro da função, ao objeto
const p2 = new Nova('Maria', 'Gerardina');//aq esta sendo retornado um objeto literal, a diferença q mostra o construtor
console.log(p2)
