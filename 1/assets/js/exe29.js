//Lembrete:
//classe é a mesma coisa de função construtora
class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            //para proteger ou ocultar as propriedades
            writable: false, //nao aceita escrever
            enumerable: false, //nao vai aparecer quando der console.log(no caso das propriedades do sistema)
            configurable: false, //nao vai aceitar nenhuma configuração
            value: cpfEnviado.replace(/\D+/g, '') //expressao regular é pra remover qualquer coisa q nao seja numero
        });
    }
}

const ValidaCpf = new ValidaCpf('705.484.450-52');