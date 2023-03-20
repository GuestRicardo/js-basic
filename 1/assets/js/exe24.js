//para add o cpf
function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/, ''); //para tirar os pontos e sinais do cpf
        }
    });
}
//para validar o cpf
ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false; //caracteres invalidos
    if (typeof this.cpfLimpo.length !== 11) return false; //se nao mandar os 11 digitos
    
    return true;
};

const cpf = new ValidaCpf('705.485.450-52');
console.log(cpf.valida());