function criaCardFilme(filme) {

    const notaFormatada = parseFloat(filme.notaUsuario).toFixed(1);

    if (filme.capa.startsWith("data:image")) {
        capa = filme.capa; // base64
    } else if (filme.capa.startsWith("/")) {
        capa = `https://image.tmdb.org/t/p/w500${filme.capa}`; // path da TMDB
    } else {
        capa = filme.capa; // caminho local
    }

    return `
    <div class="col card-filme">
        <div class="card rounded-4 border-0 p-3 bg-rosa shadow-black h-100">

            <img src="${capa}" class="card-img-top shadow-black rounded-4"
                alt="${filme.titulo}">
            <div class="card-body px-0 py-2">
                <h5 class="card-title mb-0">${filme.titulo}</h5>
                <a href="detalhes.html?id=${filme.id}" class="stretched-link"></a>
            </div>
            <div class="card-footer bg-transparent d-flex justify-content-between border-0 p-0">
                <span class="text-muted">${filme.ano}</span>
                <span class="text-muted fw-bolder">${notaFormatada}</span>
            </div>
        </div>
    </div>
  `;
}