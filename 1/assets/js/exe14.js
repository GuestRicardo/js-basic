//sera usando uma factory function, entao ela retornara um objeto
function criaCalculadora() {
    return {
        //atributos
        display:document.querySelector('.display'),
        



        //metodos
        inicia() { //esse metodo vai descandear todos os outros abaixo
            //alert('teste');
        },

        clickBotoes(){
            document.addEventListener('click', function(evento){
                const elemento = evento.target;
                if(elemento.classList.contains('btn-num')){
                    btnParaDisplay();
                }
            });
        },

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();