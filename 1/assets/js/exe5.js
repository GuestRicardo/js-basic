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

    //mensagem
    const mensagem = `<span style="text-align: center;"> Seu IMC é  ${imc} ${nivelImc}</span>`;
    //fim da mensagem
    setResultado(mensagem, true);
});

//para pegar o nivel do imc
function getNivelImc(imc) {
    const nivel = [
        '<span style="background-color: yellow; padding: 5px 10px;">Abaixo do Peso</span>',
        '<span style="background-color: green; padding: 5px 10px;">Peso Normal</p>',
        '<span style="background-color: orange; padding: 5px 10px;">Sobrepeso</p>',
        '<span style="background-color: pink;">Obes.grau 1</p>',
        '<span style="background-color: pink;">Obes.grau 2</p>',
        '<span style="background-color: red;">Obes.grau 3</p>'
    ];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
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

    //para mudar o fundo da cor do resultado
    if (isValid) {
        p.classList.add('resultado-ok');
    } else {
        p.classList.add('resultado-bad');
    }
    //fim da mudança de cor

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}
