//retorne numeros maiores que 10
const numeros = [12, 3, 55, 384, 484, 5, 9874];

//usando função callback 
function callbackFilter(valor/**ela po receber o valor, o indice ou receber o array completo*/) {
    //para evitar esse if por ter apenas um retorno booleano pode tambem usar, sendo a forma correta.
    return valor > 10;
    /*
    if (valor > 10) {
        return true;
    } else {
        return false;
    } */
}

const numerosFiltrados = numeros.filter(callbackFilter);//filter geralmente requer um valor booleano
console.log(numerosFiltrados);

/** Todo exemplo acima usando função anonima, sendo a mais comum usado em codigos
 *  const numerosFiltrados = numeros.filter((valor)=> return valor > 10;);
 */

/** ------------------------------------------------------------------------------------------------------ */

//Retorne as pessoas que tem o nome com mais de 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo os nomes terminam com a letra A

const pessoas = [
    { nome: 'Maria', idade: 61 },
    { nome: 'Moises', idade: 21 },
    { nome: 'Monica', idade: 55 },
    { nome: 'Leticia', idade: 18 },
    { nome: 'Walace', idade: 31 },
    { nome: 'Rosana', idade: 47 },
];
