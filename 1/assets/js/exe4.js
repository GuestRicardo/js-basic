
function meuEscopo() {
    const form = document.querySelector(".form"); //selecionando classe usa- se .
    const resultado = document.querySelector('#resultado'); //onde sera exibido os resultados
    const valor = [];

    //***********função para enviar os elementos pegos no form
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const hora = Number(form.querySelector('#hora'));//selecionando ids usa - se # .


        valor.push({
            hora: hora.value,
        });


        if (hora >= 6 && hora <= 12) {
            resultado.innerHTML += `<p>Bom dia! são ${(hora)},</p>`;
        } else if (hora >= 13 && hora <= 18) {
            resultado.innerHTML += `<p>Boa tarde! são ${(hora)},</p>`;
        } else {
            resultado.innerHTML += `<p>Boa noite! são ${(hora)},</p>`;
        }
        console.log(hora);
    }

    form.addEventListener('submit', recebeEventoForm);
    //***********fim da função
}

meuEscopo();
console.log(hora);

