//sera usando uma factory function, entao ela retornara um objeto
function criaCalculadora() {
    return {
        inicia() { //esse metodo vai descandear todos os outros abaixo
            alert('teste');
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();