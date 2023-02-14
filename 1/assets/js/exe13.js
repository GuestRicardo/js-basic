function tarefinhas() {
    const inputTarefa = document.querySelector('.input-nova-tarefa');
    const btnTarefas = document.querySelector('.btn-add-tarefas');
    const tarefas = document.querySelector('.tarefas');

    function criaLinha() {
        const li = document.createElement('li');
        return li;
    }

    //pegando ação da tecla enter
    inputTarefa.addEventListener('keypress', function (evento) {
        if (evento.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
        }
    });
    //fim

    //limpando input
    function limpaImput() {
        inputTarefa.value = '';
        inputTarefa.focus();//o cursor fica piscando
    }

    function botaoApagar(li) {
        li.innerText += ' ';
        const botaoapagar = document.createElement('button');
        botaoapagar.innerText = 'Apagar';
        botaoapagar.setAttribute('class', 'apagar');
        botaoapagar.setAttribute('title', 'Apagar esta tarefa');
        li.appendChild(botaoapagar);
    }

    function criaTarefa(textoInput) {
        const li = criaLinha();
        li.innerText = textoInput;
        tarefas.appendChild(li);
        limpaImput();
        botaoApagar(li);
        salvarTarefas();
    }

    //capturando o click no btn
    btnTarefas.addEventListener('click', function (evento) {
        if (!inputTarefa.value) return;//evitando enviar algo vazio               
        criaTarefa(inputTarefa.value);
    });

    document.addEventListener('click', function (evento) {
        const elemento = evento.target;

        if (elemento.classList.contains('apagar')) {
            elemento.parentElement.remove();
            salvarTarefas();
        }
    });

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li');
        const listadeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim();//subistituindo uma palavra, o trim() é para remover o espaço do fim
            listadeTarefas.push(tarefaTexto);
        }

        //convertendo uma string em json, e com isso sera possivele panipula-la, as convertendo divolta em string
        const tarefasJSON = JSON.stringify(listadeTarefas);
        //local onde esta sendo salvo no navegador
        localStorage.setItem('tarefas', tarefasJSON); //selecionando local, onde ficara as tarefas

    }

    function paraNaosumirQuandoRecarregar() {
        const tarefas = localStorage.getItem('tarefas');
        const listadeTarefas =JSON.parse(tarefas); //convertendo divolta a lista para array
      
        for (let tarefa of listadeTarefas){
           criaTarefa(tarefa);
        }
    }
    paraNaosumirQuandoRecarregar()
};

tarefinhas();
