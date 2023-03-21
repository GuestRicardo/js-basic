function Conta(agencia, saldo, conta) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};


Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/ ${this.conta}` + `
    Saldo: ${this.saldo.toFixed(2)}`);
};




Conta.prototype.sacar = function (valor) {
    if (this.saldo > valor) {
        console.log(`Saldo insuficiente ${this.saldo}`);
        
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};