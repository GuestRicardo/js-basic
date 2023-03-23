function criaPessoa(){
    const pessoaPrototype = {
        
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

    }
    return {
        nome,
        sobrenome        
    };
}

const p1 = criaPessoa('Maria', 'Jose');