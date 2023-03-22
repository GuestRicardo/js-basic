//superclass
function Conta(agencia, saldo, conta) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
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
    console.log(
    `Ag/C: ${this.agencia}/${this.conta} ` + 
    ` Saldo: R$${this.saldo.toFixed(2)}`
   );
};

//conta corrente
function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) { //esse sacar aceita saldo negativo
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);        
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
//conta poupança
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);    
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

//criando conta
const contaC = new ContaCorrente(115, 5859, 1500, 800);
//fazendo deposito
contaC.depositar(10);
contaC.sacar(50);
 console.log();

 //criando conta poupança
 const contP = new ContaPoupanca(1588, 60, 15645);
 contP.depositar(100);
 contP.sacar(50);
