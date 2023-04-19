fetch('pessoas.json') //carregando o json
  .then(resposta => resposta.json()) //capturando os dados
  .then(json => carregaElementosNaPagina(json)); //carregando as infos no navegador

function carregaElementosNaPagina(json) {
  const tabela = document.createElement('table');

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let coluna1 = document.createElement('td');
    coluna1.innerHTML = pessoa.nome;
    tr.appendChild(coluna1);
    
    // let coluna2 = document.createElement('td');
    // coluna2.innerHTML = pessoa.sobrenome;
    // tr.appendChild(coluna2);

    // let coluna3 = document.createElement('td');
    // coluna3.innerHTML = pessoa.idade;
    // tr.appendChild(coluna3);

    // let coluna4 = document.createElement('td');
    // coluna4.innerHTML = pessoa.salario;
    // tr.appendChild(coluna4);

    tabela.appendChild(tr);

  }
  const resultado = document.querySelector('.resultados');
  resultado.apply(tabela);
}