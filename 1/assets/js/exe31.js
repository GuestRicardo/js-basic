//gerando numeros aleatorios
function aleatorios(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
//esta função é so pra simular
function esperaAi(mensagem, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof mensagem !== 'string') {
        reject('NÂO aceita valores numericos');
        return;
      }

      resolve(mensagem.toUpperCase() + '- Passou na Promise');
      return;
    }, tempo);
  });
}

//aq acontece a promise
esperaAi('FAse 1', aleatorios(1, 3))
  .then(valor => {
    console.log(valor); 
    return esperaAi('fase2', aleatorios()) //retornando a promise
  })
  .then(fase => {
    console.log(fase);
    return esperaAi('fase 3', aleatorios())
  })