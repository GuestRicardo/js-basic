//gerando numeros aleatorios
const rand = (min, max) => Math.floor(Math.random() * (max -min) + min);
//gerando letras maiusculas
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;/:?]}[{-_=+)(*&¨%$#@!"\|';

console.log(geraMaiuscula())
console.log(geraMinuscula())
console.log(geraNumeros())
