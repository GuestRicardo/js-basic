const numeros = [12, 3, 55, 384, 484, 5, 9874];

//some todos os numeros
const somaNumeros = numeros.reduce((valor, acumulador, indice, array) => {
    acumulador += valor;
    return acumulador;
}, 0);
//numeros (dobro)
console.log('');
console.log(`Retornando a soma de todos os numeros é ${somaNumeros}`);
console.log('');
/****************************************************************************** */
//retorne os arrays com valores pares
const numerosPar = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    };
    return acumulador;
}, []);
//numeros pares
console.log(`Retornando valores Pares ${numerosPar}`);
console.log('');

/** *
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
const somenteNome = pessoas.map(valor => valor.nome);
//Remova apenas a chave nome do objeto
const sementeIdade = pessoas.filter(valor => ({ idade: valor.idade }));
//Adicione uma chave id em cada objeto
const addumIndice = pessoas.filter((valor, indice) => {
    //valor.id = (indice +1) * 100; //para nao ter o id 0

    //para nao mexer no objeto original, é preciso criar uma copia
    const copiaObj = { ...valor };
    copiaObj.id = indice;
    return copiaObj;
});

console.log(somenteNome);
console.log(somenteIdade);
console.log(addumIndice);
*/