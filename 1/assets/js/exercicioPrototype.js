// Para facilitar o entendimento de herança será criado um programa para um comercio:
// nesse comercio terá :
// Produto => aumento e desconto
// camisa = cor, caneca= material

//função principal
function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco    
};

//para aumentar o preco
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

//para dar desconto
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

/**==========================criando produto caneca============================================= */
//caneca
function Canecas(nome, cor, preco, material, estoque) {
    Produto.call(this, nome, preco); //herança do produto
    this.material = material,
    this.estoque = estoque,
    this.preco = preco,
    this.cor = cor,
        Object.defineProperty(this, 'estoque', {
            enumerable: true,
            configurable: false,
            get: function () {
                return estoque;
            },
            set: function (valor) {
                if (typeof valor !== 'number') {
                    return 'digite valor numerico'
                };
                estoque = valor;
            }
        })
};
//criando objeto vazio
Canecas.prototype = Object.create(Produto.prototype);
//lincando o prototipo produto, pqra q ele possa ter uma função real
Canecas.prototype.constructor = Canecas;
/**===============================fim da caneca=========================================== */

/**===============================criando produto camiseta=========================================== */
function Camisetas(nome, preco, cor, sexo, tamanho, estoque) {
    Produto.call(this, nome, preco); //herança do produto
    this.tamanho = tamanho,    
    this.cor = cor,
    this.sexo= sexo,
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function (valor) {
            if (typeof valor !== 'number') {
                return 'digite valor numerico'
            }
            estoque = valor;
        },
        set: function (valor) {
           return estoque = valor;
        }
    });
};
Camisetas.prototype = Object.create(Produto.prototype);
Camisetas.prototype.constructor = Camisetas;
/**===============================fim da camiseta=========================================== */

const camisetaGuns = new Camisetas('Longa', 50, 'preta', 'feminino', 'P', 8);
camisetaGuns.aumento(100);
console.log(camisetaGuns);


const canecaLord = new Canecas('LOTR', 'preta', 30, 'porcelana', 16);