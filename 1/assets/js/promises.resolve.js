//gerando numeros aleatorios
function aleatorios(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof mensagem !== 'string') {
      reject('NÂO aceita valores numericos')
    }
    setTimeout(() => {
      resolve(mensagem.toUpperCase() + '-passou pela promise');
    }, tempo);
  });
}

function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve(' Pagina em cache');
  } else {
    return esperaAi('baixei a pagina', 4);
  }
}

baixaPagina()
.then(dadosPagina=>{
  console.log(dadosPagina);
}).catch(erro =>console.log(erro));