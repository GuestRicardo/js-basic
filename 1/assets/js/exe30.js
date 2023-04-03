class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
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
        const camposValidos = this.todosCamposValidos();
    }

    todosCamposValidos() {
        let valid = true; //aq esta baseando q tu esta valido , e se caso ocorra um erro sera tratado em outro lugar

        //este for faz com q evite q a mensagem de erro fica sendo duplicada ssem fim
        for (let errorText of this.formulario.querySelectorAll('.mensagemErro')) {
            errorText.remove();
        }
        //este for esta pegando o texto do label e esta o add dentro da mensagem de erro
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode esta em branco`);
                valid = false;
            }
            //este if é para verificar campo cpf
            if (campo.classList.contains('cpf')) {
                if (!this.validaCpf(campo)) valid = false;
            }
        }
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF invalido.');
            return false;
        }
        return true;
    }

    criaErro(campo, mensagem) {

        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('mensagemErro');
        campo.insertAdjacentElement('afterend', div); //para definir onde vai inserir este elemento(e sera add depois do campo acabar)

    }
}


const valida = new ValidaFormulario();