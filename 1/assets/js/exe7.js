const elementos = [
    { tag: 'p', texto: 'frase 1' },
    { tag: 'div', texto: 'frase 2' },
    { tag: 'section', texto: 'frase 3' },
    { tag: 'footer', texto: 'frase 4' },
];

const container = document.querySelector('.container');// selecionando a base onde vai ficar todas as criações
const div = document.createElement('div');//aq esta sendo selecionaddo onde vai exibir todas as criações

for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
}
