function tarefas() {
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefas = document.querySelector('.btn-add-tarefas');
    const listaTarefas = document.querySelector('.tarefas');
    
    function criaLinha() {
        const li = document.createElement('li');
        return li;
    }
    
    //pegando ação da tecla enter
    inputTarefa.addEventListener('keypress', function (evento) {
        if (evento.keyCode===13){
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });
    //fim

    //limpando input
    function limpaImput(){
        inputTarefa.value= '';
        inputTarefa.focus();//o cursor fica piscando
    }
    
    function botaoApagar(li){
        li.innerText += ' ';
        const botaoapagar = document.createElement('button');
        botaoapagar.innerText= 'Apagar';
        li.appendChild(botaoapagar);
    }

    function criaTarefa(textoInput) {
        const li = criaLinha();
        li.innerText = textoInput;
        listaTarefas.appendChild(li);
        limpaImput();
        botaoApagar(li);
    }
    
        //capturando o click no btn
        btnTarefas.addEventListener('click', function (evento) {
            if (!inputTarefa.value) return;//evitando enviar algo vazio               
            criaTarefa(inputTarefa.value);
        });
};
tarefas();
