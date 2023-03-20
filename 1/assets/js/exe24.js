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
    if (typeof cpfLimpo === 'undefined') {
        return false;
    }
    return true;
};