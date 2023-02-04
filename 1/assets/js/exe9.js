const form = document.querySelector("#form");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputN1 = event.target.querySelector('#n1');
    const inputN2 = event.target.querySelector('#n2');
    const resultado = document.querySelector('#resultado');

    const n1 = Number(inputN1.value);
    const n2 = Number(inputN2.value);
    
    resultado.innerHTML = `<span style="text-align: center;"> ${n1} ${n2}</span>`;

});

