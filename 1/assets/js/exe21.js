//função construtora
//neste exemplo ele sera edxibido para ser usado por outras funçoes  
function Produto(nome, preco, estoque) {
    this.nome = nome; //o this torna a variavbel publica
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', { //o this esta indicando o objeto q esta sendo criado, por isso q ele sera selecionado
        enumerable: true,
        value: estoque
    });

};
const produto1 = new Produto('Camiseta', 20, 50);
const produto2 = new Produto('Bermuda', 20, 50);
const produto4 = new Produto('calça', 20, 50);
const produto5 = new Produto('Toalha', 20, 50);
const produto6 = new Produto('cueca', 20, 50);