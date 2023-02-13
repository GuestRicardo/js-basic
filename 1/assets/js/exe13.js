function tarefas() {
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefas = document.querySelector('.btn-add-tarefas');
    const listaTarefas = document.querySelector('.tarefas');

    //capturando o click no btn
    btnTarefas.addEventListener('click', function(evento){
        if(!inputTarefa.value) return;//evitando enviar algo vazio               
        criaTarefa(inputTarefa.value);
    });

    function criaTarefa(textoInput){  
        
    }
};
tarefas();
