function criaPessoa(){
    return {
        nome,
        sobrenome,

        //metodos
        falar(){
            console.log(`${this.nome} esta falando`);
        },
        comer(){
            console.log(`${this.nome} esta comendo`);
        },
        beber(){
            console.log(`${this.nome} esta bebendo`);
        }
    };
}

const p1 = criaPessoa('Maria', 'Jose');