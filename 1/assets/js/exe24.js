//para add o cpf
function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); //para tirar os pontos e sinais do cpf
        }
    });
}

//METODOS

//para validar o cpf
ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false; //caracteres invalidos
    if (this.cpfLimpo.length !== 11) return false; //se nao mandar os 11 digitos
    if (this.cpfLimpo.isSequencia()) return false; //para nao aceitar numeros na mesma sequencia


    const cpfParcial = this.cpfLimpo.slice(0, -2); //variavel para receber o parametro da função criaDigito
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    //comparando o cpf
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    //convertendo a string em um array
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (regressivo * Number(valor));
        regressivo--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);

};

ValidaCpf.prototype.isSequencia = function(){

};

const cpf = new ValidaCpf('705.484.450-52');
console.log(cpf.valida());