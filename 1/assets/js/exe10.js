const form = document.querySelector("#form");

form.addEventListener('submit', function (event) {
    event.preventDefault();

   
        const inputN1 = event.target.querySelector('#n1');
        const inputN2 = event.target.querySelector('#n2');
        const resultado = document.querySelector('#resultado');

        const n1 = Number(inputN1.value);
        const n2 = Number(inputN2.value);

        if (n1 === n2) {
            return resultado.innerHTML = `<span style="text-align: center;"> Tamanho da imagem Normal</span>`;
        } else if (n1 > n2) {
            return resultado.innerHTML = `<span style="text-align: center;"> Imagem widscreen</span>`;
        } else if (n2 > n1) {
            return resultado.innerHTML = `<span style="text-align: center;">Tamanho da imagem Normal</span>`;
        } else {
            return 'ERROR';
        }

});

