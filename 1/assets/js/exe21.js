//função construtora
//neste exemplo ele sera edxibido para ser usado por outras funçoes  
function Produto(nome, preco, estoque) {
    this.nome = nome; //o this torna a variavbel publica
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', { //o this esta indicando o objeto q esta sendo criado, por isso q ele sera selecionado
        enumerable: true, //mostra o numero da chave, mas se tiver como false é o contrario
        value: estoque, //valor da chave
        writable: false, //para q o valor nao seja alterado, mas se tiver como fase é ao contrario  
        configurable: true, //aq é se aceita apagar ou configura - la a chave, da mesma forma q os outros se caso estiver false vai aceitar ao contrario 
    });

};

const produto1 = new Produto('Camiseta', 20, 50);
const produto2 = new Produto('Bermuda', 20, 50);
const produto4 = new Produto('calça', 20, 50);
const produto5 = new Produto('Toalha', 20, 50);
const produto6 = new Produto('cueca', 20, 50);

console.log(Object.keys(produto1)); //aq sera exibido todas as propriedades do oibjeto, com se fosse um array
//aq sera exibido as chaves com as propriedades, mas so q em fila
for(let chave in produto1){
    console.log(chave);
}