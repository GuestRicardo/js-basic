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
  esperaAi('promeça 1', 2000),
  esperaAi('promeça 2', 3000),
  esperaAi('promeça 3', 4000),
  esperaAi('promeça 4', 5000),
  'outro valor'
];

Promise.all(promecas)
.then(valor =>{
  console.log(valor);
})
.catch(erro =>{
  console.log(erro);
});


esperaAi('Conexão com BD...', aleatorios(1,3))
.then(resposta =>{
  console.log(resposta);
  return esperaAi('Buscando dados da BASE...', aleatorios(1,3));
}).then(resposta=>{
  console.log(resposta);
  return esperaAi('Tratando os dados do BD...', aleatorios(1,3));
}).then(resposta=>{
  console.log(resposta);  
}).then(() => {
  console.log('Exibindo Dados na tela')
})
.catch(erro =>{
  console.log('Porque foi rejeitado uma promise', erro);
});

console.log('Esta mensagem sera executada simultaneamente com as promises')