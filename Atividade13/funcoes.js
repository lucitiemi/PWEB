let quebrada = false;

function abrirJanela(img) {
    if (!quebrada) {
    img.src = "imagens/aberta.png";
    document.getElementById("status").textContent = "Janela Aberta";
    }
}

function fecharJanela(img) {
    if (!quebrada) {
    img.src = "imagens/fechada.png";
    document.getElementById("status").textContent = "Janela Fechada";
    }
}

function quebrarJanela(img) {
    img.src = "imagens/quebrada.png";
    document.getElementById("status").textContent = "Janela Quebrada";
    quebrada = true;
}

function consertarJanela() {
    const img = document.getElementById("janela");
    quebrada = false;
    img.src = "imagens/fechada.png";
    document.getElementById("status").textContent = "Janela Fechada";
}