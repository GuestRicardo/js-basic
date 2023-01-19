const form = document.querySelector("#form");

//capturar o evento de submit do formulario
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //capturando o q esta dentro dos inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //------fim dos inputs------------

    //para caso passar um valor q nao seja numero
    if (!peso){
       // alert('CARACTERE INACEITAVEL, favor usar numeros');
        setResultad('Peso invalido', false);
        return;
    }

    if (!altura){
       // alert('CARACTERE INACEITAVEL, favor usar numeros');
        setResultad('Altura invalida', false);
        return;
    }


});

//criador de paragrafos
function criaP() {
    const p = document.createElement('p'); //esta sendo criado um paragrafo pelo js
    return p;
}

//função criada para enviar resultado, serve so pra colocar um html dentro de uma div(usando um id)
function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; //limpando o resultado

    const p = criaP();
    p.innerHTML = mensagem;
    resultado.appendChild(p);
}
