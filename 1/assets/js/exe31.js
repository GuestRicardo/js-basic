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

