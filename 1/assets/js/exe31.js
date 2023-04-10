//gerando numeros aleatorios
function aleatorios(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo){
  return new Promise((resolve, reject)=>{
    if(typeof mensagem !== 'string'){
      reject('NÂO aceita valores numericos')
    }
    setTimeout(()=>{
        resolve(mensagem.toUpperCase() + '-passou pela promise');
    }, tempo);
  });
}

const promecas = [
  'primeiro valor',
  esperaAi('promeça 1', 1,2),
  esperaAi('promeça 2', 2,3),
  esperaAi('promeça 3', 3,4),
  esperaAi('promeça 4', 4,5),
  'outro valor'
];

Promise.all(promecas)
.then(valor =>{
  console.log(valor);
})
.catch(erro =>{
  console.log(erro);
});


