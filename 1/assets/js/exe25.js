function Conta(agencia, saldo, conta) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
};
Conta.prototype.sacar = function(valor){};
Conta.prototype.sacar = function(){};