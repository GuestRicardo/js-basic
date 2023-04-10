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

esperaAi('Conexão com BD...', aleatorios(1,3)).then(resposta =>{
  console.log(resposta);
})
.then(resposta=>{
  console.log('')
})