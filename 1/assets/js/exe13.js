function tarefas() {
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefas = document.querySelector('.btn-add-tarefas');
    const listaTarefas = document.querySelector('.tarefas');

    //capturando o click no btn
    btnTarefas.addEventListener('click', function (evento) {
        if (!inputTarefa.value) return;//evitando enviar algo vazio               
        criaTarefa(inputTarefa.value);
    });

    function criaLinha() {
        const li = document.createElement('li');
        return li;
    }

    //pegando ação da tecla enter
    inputTarefa.addEventListener('keypress', function (evento) {
        if (evento.keyCode===13){
            if (!inputTarefa.value) return;
        }
    });
    //fim
    function criaTarefa(textoInput) {
        const li = criaLinha();
        li.innerText = textoInput;
        listaTarefas.appendChild(li);
        limpaImput();
    }
    //limpando input
    function limpaImput(){
        inputTarefa.value= '';
        inputTarefa.focus();//o cursor fica piscando
    }
};
tarefas();
