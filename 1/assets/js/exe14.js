//sera usando uma factory function, entao ela retornara um objeto
function criaCalculadora() {
    return {
        //atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),


        //metodos
        inicia() { //esse metodo vai descandear todos os outros abaixo
            //alert('teste');
            this.clickBotoes();        
        },

        clearDsiplay(){
            this.display.value= '';
        },

        clickBotoes() {
            document.addEventListener('click', evento => { //a arrow function aq e a mais indicada, pois isola o this, somente para ela
                const elemento = evento.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();