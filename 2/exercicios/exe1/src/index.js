import {
    nome2 as nome3,
    sobrenome,
    idade,
    soma
} from '../models/modulo1';

//para caso estiver importando uma variavel q ja tenha o mesmo nome, é so usar o as
const nome = 'Renato';

console.log(nome3, '', sobrenome, ', Idade:', idade);
console.log(`A soma da função importada é `, soma(5, 5));