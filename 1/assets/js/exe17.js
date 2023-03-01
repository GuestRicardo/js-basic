//Dobre os numeros
const numeros = [12, 3, 55, 384, 484, 5, 9874];
const numerosDobro = numeros.map( valor=> {return `valores em dobro ${valor * 2}`}); 
console.log(numerosDobro);


//lista de pessoas
const pessoas = [
    { nome: 'Maria', idade: 61 },
    { nome: 'Moises', idade: 21 },
    { nome: 'Monica', idade: 55 },
    { nome: 'Leticia', idade: 18 },
    { nome: 'Walace', idade: 31 },
    { nome: 'Rosana', idade: 47 },
    { nome: 'Lenon', idade: 4 },
    { nome: 'Leo', idade: 14 },
    { nome: 'Bidu', idade: 14 },
    { nome: 'Biu', idade: 24 },
];
//Retorne apenas uma string com nome da pessoa
const pessoasNomeGrande = pessoas.filter(valor=> valor.nome.length >= 5);
//Remova apenas a chave nome do objeto
const pessoasVelhas = pessoas.filter(valor=> valor.idade >50);
//Adicione uma chave id em cada objeto
const nomesA = pessoas.filter(valor=> valor.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasNomeGrande);
console.log(pessoasVelhas);
console.log(nomesA);