// fetch('pessoas.json') //carregando o json(fez a busca do json)
//   .then(resposta => resposta.json()) //capturando os dados(pega as respostas)
//   .then(json => carregaElementosNaPagina(json)); //carregando as infos no navegador(converte)

axios('pessoas.json')
.then(resposta => carregaElementosNaPagina(resposta.data));//precisou carregar somente uma promise

function carregaElementosNaPagina(json) {
  const tabela = document.createElement('table');
  //console.log(json) //teste pra saber se carregou o json

  for (let pessoa of json) {
    const tr = document.createElement('tr');
    

    let coluna1 = document.createElement('td');
    coluna1.innerHTML = pessoa.nome;
    tr.appendChild(coluna1);


    let coluna3 = document.createElement('td');
    coluna3.innerHTML = pessoa.idade;
    tr.appendChild(coluna3);



    let coluna4 = document.createElement('td');
    coluna4.innerHTML = pessoa.salario;
    tr.appendChild(coluna4);

    tabela.appendChild(tr);

  }
  const resultado = document.querySelector('.resultados');
  resultado.appendChild(tabela);
}