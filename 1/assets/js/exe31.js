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
        console.log(mensagem);
        resolve(resposta);
    }, tempo);
  });
}

esperaAi('Conexão com BD...', aleatorios(1,3))
.then(resposta =>{
  console.log(resposta);
  return esperaAi('Buscando dados da BASE...', aleatorios(1,3));
})
.then(resposta=>{
  console.log(resposta);
  return esperaAi('Tratando os dados do BD...', aleatorios(1,3));
})
.then(()=>{
  console.log('Exibindo Dados na tela');
})
.catch(erro =>{
  console.log('Porque foi rejeitado uma promise');
});

console.log()