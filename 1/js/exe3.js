//let numero = prompt('Digite um número: ');
//numero = Number(numero);//convertendo para number
//ou

function meuEscopo() {
    const form = document.querySelector(".form"); //selecionando classe usa- se .
    const resultado = document.querySelector('#resultado');
    const pessoas = [];

    //***********função para enviar os elementos pegos no form
    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('#nome');//selecionando ids usa - se # .
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value},</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
    //***********fim da função
}

meuEscopo();

