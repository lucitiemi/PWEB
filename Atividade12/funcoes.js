// RETANGULO

function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
}

function areaRet() {
    let base = Number(prompt("Digite o valor da base do retângulo:"));
    let altura = Number(prompt("Digite o valor da altura do retângulo:"));

    objRet = new Retangulo(base, altura);

    let area = objRet.base * objRet.altura;

    document.getElementById("resultado").innerHTML = `A área do retângulo é: <strong>${area}</strong>`;
}


// CONTA

class Conta {
    constructor(nome, banco, num, saldoInicial) {
        this._nome = nome;
        this._banco = banco;
        this._numero = num;
        this._saldo = saldoInicial;
    }
    getNome() {
        return this._nome;
    }
    getBanco() {
        return this._banco;
    }
    getNumero() {
        return this._numero;
    }
    getSaldo() {
        return this._saldo;
    }
}

class ContaCorrente extends Conta {
    constructor(nome, banco, num, saldoInicial, saldoEspecial) {
        super(nome, banco, num, saldoInicial);
        this._saldoEspecial = saldoEspecial;
    }
    getSaldoEspecial() {
        return this._saldoEspecial;
    }
}

class ContaPoupanca extends Conta {
    constructor(nome, banco, num, saldoInicial, juros, dtVcto) {
        super(nome, banco, num, saldoInicial);
        this._juros = juros;
        this._dtVcto = dtVcto;
    }
    getJuros() {
        return this._juros;
    }
    getDtVcto() {
        return this._dtVcto;
    }
}

function criarContaCorrente() {
    let nome = prompt("Digite o nome do correntista:");
    let banco = Number(prompt("Digite o código do banco:"));
    let num = Number(prompt("Digite o número da conta:"));
    let saldoInicial = Number(prompt("Digite o saldo inicial:"));
    let saldoEspecial = Number(prompt("Digite o saldo especial:"));

    objCC = new ContaCorrente(nome, banco, num, saldoInicial, saldoEspecial);

    document.getElementById("resultado").innerHTML = `Conta corrente criada com sucesso!<br><br>
                                                        Nome: ${objCC.getNome()}<br>
                                                        Banco: ${objCC.getBanco()}<br>
                                                        Numero da conta: ${objCC.getNumero()}<br>
                                                        Saldo: ${objCC.getSaldo()}<br>
                                                        Saldo Especial: ${objCC.getSaldoEspecial()}
                                                        `;
}

function criarContaPoupanca() {
    let nome = prompt("Digite o nome do correntista:");
    let banco = Number(prompt("Digite o código do banco:"));
    let num = Number(prompt("Digite o número da conta:"));
    let saldoInicial = Number(prompt("Digite o saldo inicial:"));
    let juros = Number(prompt("Digite o valor dos juros:"));
    let dtVcto = prompt("Digite a data de vencimento:");

    objCP = new ContaPoupanca(nome, banco, num, saldoInicial, juros, dtVcto);

    document.getElementById("resultado").innerHTML = `Conta poupança criada com sucesso!<br><br>
                                                        Nome: ${objCP.getNome()}<br>
                                                        Banco: ${objCP.getBanco()}<br>
                                                        Numero da conta: ${objCP.getNumero()}<br>
                                                        Saldo: ${objCP.getSaldo()}<br>
                                                        Juros: ${objCP.getJuros()} %<br>
                                                        Data de vencimento: ${objCP.getDtVcto()}
                                                        `;
}

function limpar() {
    document.getElementById("resultado").innerHTML = ``;
}