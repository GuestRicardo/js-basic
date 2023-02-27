//sera usando uma factory function, entao ela retornara um objeto
function Calculadora() {
    //atributos
    display: document.querySelector('.display');
    //btnClear: document.querySelector('.btn-clear'),
    //btnDel: document.querySelector('.btn-del'),
    //btnIgual: document.querySelector('.btn-eq'),


    //metodos
    this.inicia = function () { //esse metodo vai descandear todos os outros abaixo
        //alert('teste');
        this.clickBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = function () {
        this.display.addEventListener('keyup', evento => {
            if (evento.keyCode === 13) {
                this.realizaConta();
            }
        });
    };

    this.realizaConta = function () {
        let calculo = this.display.value;

        try {
            calculo = eval(calculo);
            if (!calculo) {
                alert('Conta Invalida');
                return;
            }
            this.display.value = String(calculo);
        } catch (e) {
            alert('Conta Invalida');
            return;
        }
    };

    this.clearDsiplay = function () {
        this.display.value = '';
    };

    this.btnDelete = function () {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.clickBotoes = function () {
        document.addEventListener('click', evento => { //a arrow function aq e a mais indicada, pois isola o this, somente para ela
            const elemento = evento.target;

            if (elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
            }
            if (elemento.classList.contains('btn-clear')) {
                this.clearDsiplay();
            }
            if (elemento.classList.contains('btn-del')) {
                this.btnDelete();
            }
            if (elemento.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = function (valor) {
        this.display.value += valor;
    };

};
const calculadora = new Calculadora();
calculadora.inicia();