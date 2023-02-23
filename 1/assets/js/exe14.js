//sera usando uma factory function, entao ela retornara um objeto
function criaCalculadora() {
    return {
        inicia() {
            alert('teste');
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();