const falar ={
    falar() {
        console.log(`${this.nome} esta falando`);
    }
};

const comer ={
    comer() {
        console.log(`${this.nome} esta comendo`);
    },
};

const beber ={
    beber() {
        console.log(`${this.nome} esta bebendo`);
    },
};

//usando spread
const pessoaPrototype = { ... falar, ...comer, ...beber}
//assign
const pessoaPrototype2 = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobrenome) { 

    return Object.create(pessoaPrototype, {
        nome: { value: nome},
        sobrenome: { value: sobrenome}
    });
}

const p1 = criaPessoa('Maria', 'Jose');
console.log(p1);