//Dobre os numeros
const numeros = [12, 3, 55, 384, 484, 5, 9874];
const numerosDobro = numeros.map( valor=> {return `valores em dobro ${valor * 2}`}); 
console.log(numerosDobro);



const numerosFiltrados = numeros.filter(callbackFilter);//filter geralmente requer um valor booleano
console.log(numerosFiltrados);

/** Todo exemplo acima usando função anonima, sendo a mais comum usado em codigos
 * 
 *  const numerosFiltrados = numeros.filter((valor)=> return valor > 10;);
 */

/** ------------------------------------------------------------------------------------------------------ */


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
//Retorne as pessoas que tem o nome com mais de 5 letras ou mais
const pessoasNomeGrande = pessoas.filter(valor=> valor.nome.length >= 5);
//Retorne as pessoas com mais de 50 anos
const pessoasVelhas = pessoas.filter(valor=> valor.idade >50);
//Retorne as pessoas cujo os nomes terminam com a letra A
const nomesA = pessoas.filter(valor=> valor.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasNomeGrande);
console.log(pessoasVelhas);
console.log(nomesA);