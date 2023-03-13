//função construtora
//neste exemplo ele sera edxibido para ser usado por outras funçoes  
function Produto(nome, preco, estoque) {
    this.nome = nome; //o this torna a variavbel publica
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty (this, 'estoque', {
        nome: {
            enumerable: true, //mostrar chave
            configurable: true, //reconfigurar
            //o gett so exibe o valor
            get: function(){
                return estoque;
            },
            set: function(valor){
                if(typeof valor !== 'number'){
                    console.log('estoque so aceita numeos')
                }
                estoquePrivado = valor;
            }
        },

    });

};
const produto1 = new Produto('Blusa', 21, 3);
//adicionando estoque
produto1 = 522;
console.log(produto1.estoque);
