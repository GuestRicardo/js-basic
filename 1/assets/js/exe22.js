//função construtora
//neste exemplo ele sera edxibido para ser usado por outras funçoes  
function Produto(nome, preco, estoque) {
    this.nome = nome; //o this torna a variavbel publica
    this.preco = preco;

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true,
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true,
        },
    });

};

const produto1 = new Produto('Blusa', 21,3);
console.log(Object.keys(produto1));