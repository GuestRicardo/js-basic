const form = document.querySelector("#form");

//capturar o evento de submit do formulario
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //capturando o q esta dentro dos inputs
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    //------fim dos inputs------------

    //para caso passar um valor q nao seja numero
    if (!peso) {
        // alert('CARACTERE INACEITAVEL, favor usar numeros');
        setResultado('Peso invalido', false);
        return;
    }

    if (!altura) {
        //alert('CARACTERE INACEITAVEL, favor usar numeros');
        setResultado('Altura invalida', false);
        return;
    }

    const imc = getImc(peso, altura);//trazendo o calculo do imc para dentro do form
    const nivelImc = getNivelImc(imc);

    console.log(imc, nivelImc);
});

//para pegar o nivel do imc
function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Acima do Peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39, 9) return [5];    
    if (imc >= 34.9) return [4];
    if (imc >= 29.9) return [3];
    if (imc >= 24.9) return [2];
    if (imc >= 18, 5) return [1];
    if (imc < 18, 5) return [0];
}
//-----------fim-----------------

//função para fazer o calculo do imc
function getImc(peso, altura) {
    const imc = peso / altura ** 2; //calculo
    return imc.toFixed(2);//fixando 2 casas pos o numero
}
//------------fim da função-------------

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
