/**calculo IMC *
const peso = 82;
const altura = 1.77;
imc = peso / (altura * altura);
console.log(imc);*

=========================================================

/**usando janelas de prompt *
const n1 = prompt('Digite um numero');
const n2 = prompt('Digite um numero');
const total = parseFloat(n1) + parseFloat (n2);
alert('O resultado da operação é' + ' ' + total);*/

/*Aponte para as letras selecionadas*
A = b 
B = c 
C = a *

let varA = 'A';
let varB = 'B';
let varC = 'C';

let A = varB;
let B = varC;
let C = varA;

console.log(`A= ${A}, B= ${B}, C= ${C}`);*/
/**segunda forma de resouver */

let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] = [varB, varC, varA];

console.log(`A= ${varA}, B= ${varB}, C= ${varC}`);



