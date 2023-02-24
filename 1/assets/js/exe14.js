//sera usando uma factory function, entao ela retornara um objeto
function criaCalculadora() {
    return {
        //atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnIgual: document.querySelector('.btn-eq'),


        //metodos
        inicia() { //esse metodo vai descandear todos os outros abaixo
            //alert('teste');
            this.clickBotoes();
        },

        clearDsiplay() {
            this.display.value = '';
        },

        btnDel() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {

        },

        clickBotoes() {
            document.addEventListener('click', evento => { //a arrow function aq e a mais indicada, pois isola o this, somente para ela
                const elemento = evento.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.innerText);
                }
                if (elemento.classList.contains('btn-clear')) {
                    this.clearDsiplay();
                }
                if (elemento.classList.contains('btn-del')) {
                    this.btnDel();
                }
                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
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