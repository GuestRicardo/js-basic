function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        //metodos
        falar() {
            console.log(`${this.nome} esta falando`);
        },

        comer() {
            console.log(`${this.nome} esta comendo`);
        },

        beber() {
            console.log(`${this.nome} esta bebendo`);
        },
    };
    
    return Object.create(pessoaPrototype, {
        nome: { value: nome},
        sobrenome: { value: sobrenome}
    });
}

const p1 = criaPessoa('Maria', 'Jose');

console.log(p1)