const elementos = [
    { tag: 'p', texto: 'Aq esta sendo criado uma tag p' },
    { tag: 'div', texto: 'Aq esta sendo criado uma div' },
    { tag: 'section', texto: 'Aq esta sendo criado uma section' },
    { tag: 'footer', texto: 'Aq esta sendo criado um footer' },
];

const container = document.querySelector('.container');// selecionando a base onde vai ficar todas as criações
const div = document.createElement('div');//aq esta sendo selecionaddo onde vai exibir todas as criações

for (let i = 0; i < elementos.length; i++) {
    //desestruturando os objetos
    let { tag, texto } = elementos[i]; //a cada interação com o laço sera dicionado um elemento do array
    let tagCriada = document.createElement(tag); //criando os elementos
    tagCriada.innerText = texto; //colocando o texto dentro do 'p'
    div.appendChild(tagCriada);//pegando todos os elementos e adicionando na tag div criada
}

container.appendChild(div);