//criando uma chave privada dentro do objeto, para evitar de qualquer um tenha acesso a velocidade, no caso mexer no objeto
//mesmo atribuindo uma velocidade 1000km nao sera mexido na velocidade interna q esta salva no objeto da classe
const _velocidade = Symbol('velocidade') //valor entre aspas é so a descrição
class Carro {
    constructor(nome) {
        this.nome = nome;
        this. [_velocidade] = 0;
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }
    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
};

const carro1 = new Carro('Fusca');

//simulando se tivesse acelerando o fusca ate 200km por hra
//ele nao pode passar de 100 pois ele esta setado a 100 por hra 
for (let i = 0; i <= 200; i++) {
    carro1.acelerar();
};
//para acessar a velocidade por fora do objeto, teria q se ultilizar o get
console.log(carro1);