function maior() {
    // Para receber três números e retornar o maior
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let num3 = Number(prompt("Digite o terceiro número:"));

    let maior = Math.max(num1, num2, num3);

    document.getElementById("resultado").innerHTML = `O maior número é: <strong>${maior}</strong>`;
}

function crescente() {
    // Para receber três números e retorná-los em ordem crescente
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let num3 = Number(prompt("Digite o terceiro número:"));

    let numeros = [num1, num2, num3];
    numeros.sort((x,y) => x - y);

    document.getElementById("resultado").innerHTML = `Números em ordem: <strong>${numeros.join(', ')}</strong>`;
}

function palindromo() {
    // Para receber uma string e retornar se ela é palíndromo ou não. (converter para maiúsculas)
    let palavra = prompt("Digite o que deseja verificar se é palíndromo:");

    let formatada = palavra.toUpperCase().replace(/\s/g, '');
    let invertida = formatada.split('').reverse().join('');

    if (formatada === invertida) {
        document.getElementById("resultado").innerHTML = `É um palíndromo!`;
    } else {
        document.getElementById("resultado").innerHTML = `Não é um palíndromo!`;
    }
}

function triangulos() {
    // Para receber 3 valores, informar se formam um triângulo e qual é o tipo do triângulo
    let num1 = Number(prompt("Digite o primeiro lado do triângulo:"));
    let num2 = Number(prompt("Digite o segundo lado do triângulo:"));
    let num3 = Number(prompt("Digite o terceiro lado do triângulo:"));

    if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {

        if (num1 === num2 && num2 === num3) {
            document.getElementById("resultado").innerHTML = `Triângulo equilátero`;
        } else if (num1 === num2 || num1 === num3 || num2 === num3) {
            document.getElementById("resultado").innerHTML = `Triângulo isósceles`;
        } else {
            document.getElementById("resultado").innerHTML = `Triângulo escaleno`;
        }
    } else {
        document.getElementById("resultado").innerHTML = `As medidas não formam um triângulo`;
    }
}

function limpar() {
    document.getElementById("resultado").innerHTML = ``;
}