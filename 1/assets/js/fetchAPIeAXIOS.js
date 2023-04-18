fetch('pessoas.json') //carregando o json
  .then(resposta => resposta.json()) //capturando os dados
  .then(json => carregaElementosNaPagina(json)); //carregando as infos no navegador

function carregaElementosNaPagina(json) {
  const tabela = document.createElement('table');
  for (let pessoa of json) {
    const tr = document.createElement('tr');

    const coluna = document.createElement('td');
    coluna.innerHTML = pessoa.nome;

    const coluna = document.createElement('td');
    coluna.innerHTML = pessoa.nome;
    
    const coluna = document.createElement('td');
    coluna.innerHTML = pessoa.nome;
  }
}