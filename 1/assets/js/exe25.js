function Conta(agencia, saldo, conta) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (this.saldo > valor) {
        console.log(`Saldo insuficiente ${this.saldo}`);        
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/ ${this.conta}` + `
    Saldo: ${this.saldo.toFixed(2)}`);
};
//conta corrente
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) { //esse sacar aceita saldo negativo
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente ${this.saldo}`);        
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
//conta poupança
function ContaPoupanca(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaPoupanca = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaC = new ContaCorrente(115, 5859, 1500, 800);
contaC.depositar(10);
