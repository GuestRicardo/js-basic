
//e uma propriedade privada
//criando uma chave privada dentro do objeto, para evitar de qualquer um tenha acesso a velocidade, no caso mexer no objeto
//mesmo atribuindo uma velocidade 1000km nao sera mexido na velocidade interna q esta salva no objeto da classe
const _velocidade = Symbol('velocidade') //valor entre aspas é so a descrição
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    //aq vc consegueria fazer alterações nos padroes da velocidade do carro(na verdade é uma modificação externa momentanea, pois o objeto ja tem seu valor padrao)
    set velocidade(valor) {
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    //para acessar a velocidade por fora do objeto, teria q se ultilizar o get
    get velocidade() {
        console.log('GETTER')
        return this[_velocidade];
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
carro1.velocidade = 50; //aplicando o setter
console.log(carro1.velocidade);//aplicando o getter