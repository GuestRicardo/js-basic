fetch('pessoas.json') //carregando o json
  .then(resposta => resposta.json()) //capturando os dados
  .then(json => carregaElementosNaPagina(json)); //carregando as infos no navegador

function carregaElementosNaPagina(json) {
  const tabela = document.createElement('table');

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let coluna = document.createElement('td');
    coluna.innerHTML = pessoa.nome;
    tr.appendChild(coluna);
    
    coluna = document.createElement('td');
    coluna.innerHTML = pessoa.sobrenome;
    tr.appendChild(coluna);

    coluna = document.createElement('td');
    coluna.innerHTML = pessoa.idade;
    tr.appendChild(coluna);

    coluna = document.createElement('td');
    coluna.innerHTML = pessoa.salario;
    tr.appendChild(coluna);

  }
}