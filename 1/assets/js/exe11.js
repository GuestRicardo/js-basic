const form = document.querySelector("#form");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputN1 = event.target.querySelector('#largura');
    const inputN2 = event.target.querySelector('#altura');
    const resultado = document.querySelector('#resultado');

    const largura = Number(inputN1.value);
    const altura = Number(inputN2.value);

    if (largura === altura) {
        return resultado.innerHTML = `<p>Sua Imagem esta quadrada</p>`;
    } else if (largura > altura) {
        return resultado.innerHTML = `<p>Sua Imagem esta em modo paisagem</p>`;
    } else if (largura < altura) {
        return resultado.innerHTML = `<p>Sua Imagem esta em modo retrato</p>`;
    } else{
        return resultado.innerHTML=`<p>ERRO, apenas use numeros, não pode usar letras</p>`;
    }

});

