//para add o cpf
function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); //para tirar os pontos e sinais do cpf
        }
    });
}
//para validar o cpf
ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false; //caracteres invalidos
    if (this.cpfLimpo.length !== 11) return false; //se nao mandar os 11 digitos

    const cpfParcial = this.cpfLimpo.slice(0, -2); //variavel para receber o parametro da função criaDigito
    const digito1 = this.criaDigito(cpfParcial);
    return true;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    //convertendo a string em um array
    const cpfArray = Array.from(cpfParcial);
    console.log(cpfArray);
};

const cpf = new ValidaCpf('705.485.450-52');
console.log(cpf.valida());