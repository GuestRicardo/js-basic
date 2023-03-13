//função construtora
//neste exemplo ele sera edxibido para ser usado por outras funçoes  
function Produto(nome, preco, estoque) {
    this.nome = nome; //o this torna a variavbel publica
    this.preco = preco;

    Object.defineProperty (this, 'estoque', {
        nome: {
            enumerable: true,
            configurable: true,
        },

    });

};

const produto1 = new Produto('Blusa', 21,3);
console.log(produto1);

for(let chave in produto1){
    console.log(chave);
}