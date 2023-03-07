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


//usando construtor
const pessoa2 = new Object();
pessoa2.nome = 'Jose';
pessoa2.sobrenome = 'Matias';




