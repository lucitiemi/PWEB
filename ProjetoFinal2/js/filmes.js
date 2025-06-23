// carrega os filmes
const listaFilmes = JSON.parse(localStorage.getItem("filmes")) || [];

// carrega e exibe os cards
const container = document.getElementById("lista-filmes");
listaFilmes.forEach(filme => {
    container.innerHTML += criaCardFilme(filme);
});

// filtra a busca em Meus Filmes conforme digita
document.getElementById("inputBuscar").addEventListener("input", function () {
    const busca = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card-filme"); // seletor cards de filme

    cards.forEach(card => {
        const titulo = card.querySelector(".card-title").textContent.toLowerCase();
        if (titulo.includes(busca)) {
            card.classList.remove("d-none");
        } else {
            card.classList.add("d-none");
        }
    });
});