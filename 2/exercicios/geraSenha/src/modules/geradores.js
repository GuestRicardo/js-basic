//gerando numeros aleatorios
const rand = (min, max) => Math.floor(Math.random() * (max -min) + min);
//gerando letras maiusculas
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));

console.log(geraMaiuscula())