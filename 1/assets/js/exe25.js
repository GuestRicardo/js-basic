function Conta(agencia, saldo, conta) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente');
        this.verSaldo();
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

//criando conta
const conta1 = new Conta(11, 55, 125);
//saldo anterior
console.log()
//depositando
conta1.depositar(10);
//sacando
conta1.sacar(25);
console.log()