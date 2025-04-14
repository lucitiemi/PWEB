function calcImc() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso / (altura*altura);
    

    console.log(altura);
    console.log(peso);
    console.log(imc);
    

    switch(true) {
        case imc<18.5:
            document.getElementById("resultado").innerHTML = `IMC < 18,5 - grau 0 - magreza`;
            break;
        case imc>=18.5 && imc<25:
            document.getElementById("resultado").innerHTML = `18,5 < IMC < 24,9 - grau 0 - normal`;
            break;
        case imc>=24.9 && imc<30:
            document.getElementById("resultado").innerHTML = `24,9 < IMC < 29,9 - grau 1 - sobrepeso`;
            break;
        case imc>=29.9 && imc<40:
            document.getElementById("resultado").innerHTML = `29,9 < IMC < 39,9 - grau 2 - obesidade`;
            break;
        case imc>=40:
            document.getElementById("resultado").innerHTML = `IMC < 40 - grau 3 - obesidade grave`;
            break;
    }
}

function limpar() {
    formulario.reset();
    document.getElementById("resultado").innerHTML = ``;
}