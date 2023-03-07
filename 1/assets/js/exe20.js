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