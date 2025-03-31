alert("Bem-vindo ao jogo Pedra, Papel ou Tesoura!!")
var escolhaPessoa = prompt("Faça sua escolha entre PEDRA, PAPEL ou TESOURA");

var numRandom = Math.random();
var escolhaPc;

// 0 - 0.33     PEDRA
// 0.34 - 0.66  PAPEL
// 0.67 - 0.99  TESOURA
if (numRandom < 0.33) {
    escolhaPc = "PEDRA";
} else if (numRandom > 0.66) {
    escolhaPc = "TESOURA"
} else {
    escolhaPc = "PAPEL"
};


if (escolhaPessoa == "PEDRA") {
    if (escolhaPc == "TESOURA") {
        alert("O computador escolheu TESOURA")
        alert("Pedra quebra tesoura, você ganhou!")
    } else if (escolhaPc == "PEDRA") {
        alert("O computador escolheu PEDRA")
        alert("Empatou!")
    } else if (escolhaPc == "PAPEL") {
        alert("O computador escolheu PAPEL")
        alert("Papel cobre pedra, você perdeu!")
    }
} else if (escolhaPessoa == "PAPEL") {
    if (escolhaPc == "TESOURA") {
        alert("O computador escolheu TESOURA")
        alert("Tesoura corta papel, você perdeu!")
    } else if (escolhaPc == "PEDRA") {
        alert("O computador escolheu PEDRA")
        alert("Papel cobre pedra, você ganhou!")
    } else if (escolhaPc == "PAPEL") {
        alert("O computador escolheu PAPEL")
        alert("Empatou!")
    }
} else if (escolhaPessoa == "TESOURA"){
    if (escolhaPc == "TESOURA") {
        alert("O computador escolheu TESOURA")
        alert("Empatou!")
    } else if (escolhaPc == "PEDRA") {
        alert("O computador escolheu PEDRA")
        alert("Pedra quebra tesoura, você perdeu!")
    } else if (escolhaPc == "PAPEL") {
        alert("O computador escolheu PAPEL")
        alert("Tesoura corta papel, você ganhou!")
    }
};