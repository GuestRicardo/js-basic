//gerando numeros aleatorios
function aleatorios(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo){
  return new Promise((resolve, reject)=>{
    if(typeof mensagem !== 'string'){
      reject('NÂO aceita valores numericos');
      return;
    }
    // O método global setTimeout()define um cronômetro que executa
    //  uma função ou trecho de código especificado assim que o cronômetro expira.
    setTimeout(()=>{
        resolve(mensagem.toUpperCase() + ' - passou pela promise');
        return;
    }, tempo);
  });
}

//array q passara a promise, e ela retornará como um array
const promecas = [
  'primeiro valor',//este nao passará na promise
  esperaAi('promeça 1', 1,2),
  esperaAi('promeça 2', 2,3),
  esperaAi('promeça 3', 3,4),
  esperaAi('promeça 4', 4,5),
  'outro valor' //este nao passara na promise
];

//resouver a promise
Promise.race(promecas)
.then(valor =>{
  console.log(valor);
})
.catch(erro =>{
  console.log(erro);
});