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

    }
}
const valida = new ValidaFormulario();