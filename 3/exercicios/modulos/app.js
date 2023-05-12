const mod1 = require('./mod1');
console.log(mod1.fala());

//importando class
const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Monica');
console.log(p1);