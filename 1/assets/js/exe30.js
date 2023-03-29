class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('#formulario');
        this.nome = document.querySelector('#nome');
        this.sbrenome = document.querySelector('#sobrenome');
        this.cpf = document.querySelector('#cpf');
        this.usuario = document.querySelector('#usuario');
        this.senha = document.querySelector('#senha');

        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', evento => {
            this.handleSubmit(evento); // muito usado em react
        });
    }
    //para evitar de enviar algo errado, ou campo vazio
    handleSubmit(evento) {
        evento.preventDefault();
        const camposvalidos = this.todosCamposValidos();
    }
    todosCamposValidos() {
        let valido = true; //aq esta baseando q tu esta valido , e se caso ocorra um erro sera tratado em outro lugar
    }
}


const valida = new ValidaFormulario();