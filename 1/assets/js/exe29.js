//Lembrete:
//classe é a mesma coisa de função construtora
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            //para proteger ou ocultar as propriedades
            writable: false, //nao aceita escrever
            enumerable: true, // vai aparecer quando der console.log(no caso das propriedades do sistema)
            configurable: false, //nao vai aceitar nenhuma configuração

            value: cpfEnviado.replace(/\D+/g, '') //expressao regular é pra remover qualquer coisa q nao seja numero
        });
    }

    checagem() {
        //return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length); //vai repetir o caractere pelo tamando da string no caso é 11
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //essa é a mesma coisa da de cima mais simplificada
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos); // nestes dois exemplos q esta sendo usado a ValidaCpf era pra ser o geraDigito, nao é usada pq ele é um metodo estatico
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }

    //metodo estatico nao tem a palavra this
    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;
        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';

    }

    valida() {

        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.checagem()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}

const validaCpf = new ValidaCpf('070.987.720-03');

if (validaCpf.valida()) {
    console.log('CPF valido')
} else {
    console.log('CPF invalido')
}