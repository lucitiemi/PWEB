
let pesquisas = [];


function addPesquisa(){
    let idade = parseInt(document.getElementById("idade").value);
    let sexo = parseInt(document.getElementById("sexo").value);
    let opiniao = parseInt(document.getElementById("opiniao").value);

    console.log(idade);
    console.log(sexo);
    console.log(opiniao);

    let pesquisa = {idade, sexo, opiniao};
    pesquisas.push(pesquisa);

    console.log(pesquisa.idade);
    console.log(pesquisa.sexo);
    console.log(pesquisa.opiniao);

    let formulario = document.getElementById("formulario");
    formulario.reset();
    alert("Pesquisa enviada!");

    console.log("Objeto salvo:", pesquisa);
    console.log("Todas as pesquisas:", pesquisas);
    
}

function calcResult(){
    
    // media idade
    // idade da pessoa mais velha
    // idade da pessoa mais nova
    // quantidade de pessoas que responderam pessimo
    // porcentagem de pessoas que responderam otimo e bom
    // quantidade de mulheres, homens e outros
    if (pesquisas.length === 0) {
        document.getElementById("resultado").innerHTML = "<p style='color: red;'>Nenhuma pesquisa registrada.</p>";
        return;
    }

    let somaIdades = 0;
    let maisVelha = 0;
    let maisNova = 0;
    let pessimos = 0;
    let otimosEBons = 0;
    let fem = 0, masc = 0, outros = 0;

    pesquisas.forEach(p => {
        somaIdades += p.idade;

        if (p.idade > maisVelha) maisVelha = p.idade;
        if (p.idade < maisNova) maisNova = p.idade;

        if (p.opiniao === 1) pessimos++;
        if (p.opiniao === 3 || p.opiniao === 4) otimosEBons++;

        if (p.sexo === 1) fem++;
        else if (p.sexo === 2) masc++;
        else if (p.sexo === 3) outros++;
    });

    let mediaIdades = somaIdades / pesquisas.length;
    let porcentagemOtimosEBons = (otimosEBons / pesquisas.length) * 100;

    let html = `
        <h3>Resultado da Pesquisa</h3>
        <ul>
            <li><strong>Média de idade:</strong> ${mediaIdades.toFixed(2)} anos</li>
            <li><strong>Pessoa mais velha:</strong> ${maisVelha} anos</li>
            <li><strong>Pessoa mais nova:</strong> ${maisNova} anos</li>
            <li><strong>Quantidade de "Péssimo":</strong> ${pessimos}</li>
            <li><strong>Porcentagem "Ótimo" ou "Bom":</strong> ${porcentagemOtimosEBons.toFixed(2)}%</li>
            <li><strong>Mulheres:</strong> ${fem}</li>
            <li><strong>Homens:</strong> ${masc}</li>
            <li><strong>Outros:</strong> ${outros}</li>
        </ul>
    `;

    document.getElementById("resultado").innerHTML = html;

}