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
//nesse exemplo o ideal é usar o FILTER, pois o exemplo abaixo é so pra entender o reduce
const numerosPar = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) {
        acumulador.push(valor);
    };
    return acumulador;
}, []);
//numeros pares
console.log(`Retornando valores Pares ${numerosPar}`);
console.log('');
/************************************************************************************** */
//lista de pessoas
const pessoas = [
    { nome: 'Maria', idade: 61},
    { nome: 'Moises', idade: 21},
    { nome: 'Monica', idade: 55},
    { nome: 'Leticia', idade: 18},
    { nome: 'Walace',idade: 31},
    { nome: 'Rosana', idade: 87},
    { nome: 'Lenon', idade: 4},
    { nome: 'Leo', idade: 14},
    { nome: 'Bidu', idade: 17},
    { nome: 'Biu', idade: 24},
];
//Retorne a pessoa mais velha
const pessoaMaisVelha = pessoas.reduce((acumulador, valor)=>{
    if (acumulador.idade > valor.idade) return acumulador; //neste exemplo quando retorna o acumulador esta sendo retornado o objeto inteiro
    return valor;    
});
console.log('A pessoa mais velha da lista é:');
console.log(pessoaMaisVelha);