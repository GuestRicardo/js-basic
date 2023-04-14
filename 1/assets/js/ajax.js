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
//esta é uma cadeia de codigo q funciopnara de forma assicrona
// esperaAi('FAse 1', aleatorios(1, 3))
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('fase2', aleatorios()) //retornando a promise
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperaAi('fase 3', aleatorios())
//   })
//   .then(fase => {
//     console.log(fase);
//     return fase;
//   })
//   .then(fase => {
//     console.log('teminamos na fase:', fase);
//   })
//   .catch(erro => {
//       console.log(erro);
//   });
//este e o codigo funcional, mais usado, mais esta muito grande, por isso se o await e async

//usando await e async
//sera possivel usar as promises dentro da função partecendo a forma asicrona
async function executa() {
  try{
    const fase1 = await esperaAi(' Fase 1', aleatorios());
    console.log(fase1);
    const fase2 = await esperaAi(' Fase 2', aleatorios());
    console.log(fase2);
    const fase3 = await esperaAi(' Fase 3', aleatorios());
    console.log(fase3);
    const fase4 = await esperaAi(' Fase 4', aleatorios());
    console.log(fase4);
    console.log('teminamos na fase: ', fase4);
  }
  catch(erro){
    console.log('ERRO NAO ESTA PASSANDO PELA PROMISE', erro)
  }
}
executa();