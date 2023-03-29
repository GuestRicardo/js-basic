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

    checagem(){
    //return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length); //vai repetir o caractere pelo tamando da string no caso é 11
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo; //essa é a mesma coisa da de cima mais simplificada
    }

    valida() {

        if(!this.cpfLimpo) return false;
        if(this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.checagem()) return false;
        
        return 'checando...';
    }
}

const validaCpf = new ValidaCpf('070.987.720-03');
console.log(validaCpf.valida());