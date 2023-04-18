fetch('../json/pessoas.json') //carregando o json
  .then(resposta => resposta.json()) //capturando os dados
  .then(json => console.log(json)); //carregando as infos no navegador
