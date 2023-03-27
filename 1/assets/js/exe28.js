class Carro {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar() {
        if (this.velocidade >= 100) return;
        this.velocidade++;
    }
    freiar() {
        if (this.velocidade <= 0) return;
        this.velocidade--;
    }
};

const carro1 = new Carro('Fusca');

//simulando se tivesse acelerando o fusca ate 200km por hra
for(let i =0; i <=200; i++){
    carro1.acelerar();
};

console.log(carro1);