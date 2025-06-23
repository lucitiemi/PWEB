// para ficha tecnica

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));
const listaFilmes = JSON.parse(localStorage.getItem("filmes")) || [];

const filme = listaFilmes.find(f => f.id === id);
if (filme) {
    if (filme.capa.startsWith("data:image")) {
        capa = filme.capa; // base64
    } else if (filme.capa.startsWith("/")) {
        capa = `https://image.tmdb.org/t/p/w500${filme.capa}`; // path da TMDB
    } else {
        capa = filme.capa; // caminho local
    }
    
    const [ano, mes, dia] = filme.dataAdicao.split("-");
    const dataFormatada = `${dia}/${mes}/${ano}`;

    document.getElementById("capa-filme").src = capa;
    document.getElementById("capa-filme").alt = `Capa de ${filme.titulo}`;

    document.getElementById("titulo-filme").textContent = filme.titulo;
    document.getElementById("diretor-filme").textContent = filme.diretor;

    document.getElementById("genero-filme").textContent = filme.genero;
    document.getElementById("duracao-filme").textContent = filme.duracao;
    document.getElementById("classificacao-filme").textContent = filme.classificacao;

    document.getElementById("ano-filme").textContent = filme.ano;

    document.getElementById("elenco-filme").textContent = filme.elenco;
    document.getElementById("sinopse-filme").textContent = filme.sinopse;

    document.getElementById("notaUsuario-filme").textContent = parseFloat(filme.notaUsuario).toFixed(1);
    document.getElementById("dataAdicao-filme").textContent = dataFormatada;
} else {
    alert("Filme não encontrado.");
}

document.querySelector("#btnEditar").href = `cadastro.html?id=${filme.id}`;