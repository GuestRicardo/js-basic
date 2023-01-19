const form = document.querySelector("#form");

//capturar o evento de submit do formulario
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('evento previnido');//para confirmar q esta funcionando
    setResultado('teste')
});

//função criada para enviar resultado, serve so pra colocar um html dentro de uma div(usando um id)
function setResultado(mensagem) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //limpando o resultado
    const p = document.createElement('p'); //esta sendo criado um paragrafo pelo js
    p.classList.add('paragrafo-resultado'); //add class no paragrafo, para editar suas propriedades
    p.innerHTML = 'testando se paragrafo esta funcionando'//adicionando itens no paragrafo
    resultado.appendChild(p); //adicionando paragrafo no html via id resultado
}