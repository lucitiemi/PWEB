// pega id pela URL (caso for editar)
const params = new URLSearchParams(window.location.search);
const idFilme = params.get("id");

// carrega os filmes pelo localStorage
const listaFilmes = JSON.parse(localStorage.getItem("filmes")) || [];

// variavel para salvar a imagem ou o caminho
let posterFilme = "";

// funçao gerar novo id
function gerarNovoId(lista) {
    if (lista.length === 0) return 1;
    return listaFilmes[listaFilmes.length - 1].id + 1;
}

// função mostrar prévia da imagem
function mostrarPreview(event) {
    const input = event.target;
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            posterFilme = e.target.result;
            
            const img = document.getElementById("previewImage");
            img.src = posterFilme;
            img.classList.remove("d-none");

            // Esconde ícone
            document.getElementById("addIcon").classList.add("d-none");
        };
        reader.readAsDataURL(file);
    }
}

// se EDIÇÃO: carrega os dados no formulário
if (idFilme) {
    const filme = listaFilmes.find(f => f.id == idFilme);
    if (filme) {
        document.getElementById("inputTitulo").value = filme.titulo;
        document.getElementById("inputDirecao").value = filme.diretor;

        document.getElementById("inputAno").value = filme.ano;
        document.getElementById("inputGenero").value = filme.genero;

        document.getElementById("inputDuracao").value = filme.duracao;
        document.getElementById("inputClassificacao").value = filme.classificacao;

        document.getElementById("inputElenco").value = filme.elenco;
        document.getElementById("inputSinopse").value = filme.sinopse;

        document.getElementById("inputNotaUsuario").value = filme.notaUsuario;

        const img = document.getElementById("previewImage");
        img.classList.remove("d-none");
        img.src = filme.capa.startsWith("data:image") 
            ? filme.capa 
            : `https://image.tmdb.org/t/p/w500${filme.capa}`;
        document.getElementById("addIcon").classList.add("d-none");

        // Habilita botão Excluir
        document.getElementById("btnExcluir").disabled = false;
    }
}

// SALVAR ou ALTERAR um filme
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validarFormulario()) return; // chama a função de validar formulário

    // coleta os dados do formulário
    const titulo = document.getElementById("inputTitulo").value;
    const diretor = document.getElementById("inputDirecao").value;

    const ano = document.getElementById("inputAno").value;
    const genero = document.getElementById("inputGenero").value;

    const duracao = document.getElementById("inputDuracao").value;
    const classificacao = document.getElementById("inputClassificacao").value;

    const elenco = document.getElementById("inputElenco").value;
    const sinopse = document.getElementById("inputSinopse").value;

    const notaUsuario = document.getElementById("inputNotaUsuario").value;

    let mensagem = ""; // para mensagem de salvo ou alterado com sucesso

    // verifica se está editando ou criando novo
    if (idFilme) {
        // ALTERANDO
        const index = listaFilmes.findIndex(f => f.id == idFilme);
        if (index === -1) {
            alert("Filme não encontrado.");
            return;
        }

        listaFilmes[index] = {
            ...listaFilmes[index], // preserva dataAdicao e id
            titulo,
            diretor,
            ano,
            genero,
            duracao,
            classificacao,
            elenco,
            sinopse,
            notaUsuario,
            capa: posterFilme || listaFilmes[index].capa // imagem nova ou mantem antiga
        };

        mensagem = "Filme alterado com sucesso!";
    } else {
        // SALVANDO NOVO
        const hoje = new Date();
        const dataAdicao = hoje.toISOString().slice(0, 10);

        const novoFilme = {
            id: gerarNovoId(listaFilmes),
            dataAdicao,
            titulo,
            diretor,
            ano,
            genero,
            duracao,
            classificacao,
            elenco,
            sinopse,
            notaUsuario,
            capa: posterFilme || "assets/img/default-movie.png"
        };

        // Adiciona o filme
        listaFilmes.push(novoFilme);
        mensagem = "Filme salvo com sucesso!";
    }

    // Atualiza o localStorage
    localStorage.setItem("filmes", JSON.stringify(listaFilmes));
    alert(mensagem);
    window.location.href = "index.html";
});

// EXCLUIR um filme
document.getElementById("btnExcluir").addEventListener("click", function () {
    if (!idFilme) return;

    if (!confirm("Tem certeza que deseja excluir este filme?")) return;

    const listaFiltrada = listaFilmes.filter(f => f.id != idFilme);

    localStorage.setItem("filmes", JSON.stringify(listaFiltrada));

    alert("Filme excluído com sucesso!");
    window.location.href = "index.html";
});

/**************/
/* VALIDAÇÕES */
/**************/
// validando campos de Ano, Duração e Minha Nota ao digitar
document.getElementById("inputAno").addEventListener("blur", () => {
    const input = document.getElementById("inputAno");
    const ano = input.value.trim();
    if (!/^\d{4}$/.test(ano)) {
        input.classList.add("is-invalid");
    } else {
        input.classList.remove("is-invalid");
    }
});
const duracaoInput = document.getElementById("inputDuracao");
duracaoInput.addEventListener("blur", () => {
    const duracao = duracaoInput.value.trim();
    if (!/^\d+$/.test(duracao)) {
        duracaoInput.classList.add("is-invalid");
    } else {
        duracaoInput.classList.remove("is-invalid");
    }
});
const notaInput = document.getElementById("inputNotaUsuario");
notaInput.addEventListener("blur", () => {
    const nota = parseFloat(notaInput.value.trim());
    if (isNaN(nota) || nota < 0 || nota > 10) {
        notaInput.classList.add("is-invalid");
    } else {
        notaInput.classList.remove("is-invalid");
    }
});

// função de validação para uso nos botões
function validarFormulario() {
    const ano = document.getElementById("inputAno").value.trim();
    const duracao = document.getElementById("inputDuracao").value.trim();
    const nota = parseFloat(document.getElementById("inputNotaUsuario").value.trim());

    if (!/^\d{4}$/.test(ano)) {
        alert("Ano inválido! Digite um ano com 4 dígitos.");
        return false;
    }
    if (!/^\d+$/.test(duracao)) {
        alert("Duração inválida! Digite um número inteiro (em minutos).");
        return false;
    }
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Nota inválida! Digite um número entre 0.0 e 10.0.");
        return false;
    }
    return true;
}

/************************/
/* buscando na API TMDB */
/************************/
const API_KEY = "3dc485e5b15d28f58218734494c5f44d";
const resultadoTMDB = document.getElementById("resultadoTMDB");
const inputTitulo = document.getElementById("inputTitulo");

inputTitulo.addEventListener("input", async () => {
    const query = inputTitulo.value.trim();
    if (!query) return;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-BR&query=${encodeURIComponent(query)}`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        resultadoTMDB.innerHTML = "";
        resultadoTMDB.classList.remove("d-none");

        dados.results.slice(0, 7).forEach(filme => {
            const item = document.createElement("li");
            item.classList.add("list-group-item", "list-group-item-action");
            item.textContent = `${filme.title} (${filme.release_date?.split("-")[0] || "?"})`;
            item.addEventListener("click", () => carregarFilmeTMDB(filme.id));
            resultadoTMDB.appendChild(item);
        });
    } catch (erro) {
        console.error("Erro ao buscar filmes na TMDB:", erro);
    }
});

// Fecha lista com ESC
inputTitulo.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        resultadoTMDB.innerHTML = "";
        resultadoTMDB.classList.add("d-none");
    }
});

// Fecha lista ao sair do campo (com pequeno delay para permitir clique)
inputTitulo.addEventListener("blur", () => {
    setTimeout(() => {
        resultadoTMDB.innerHTML = "";
        resultadoTMDB.classList.add("d-none");
    }, 150);
});

async function carregarFilmeTMDB(idTMDB) {
    const urlDetalhes = `https://api.themoviedb.org/3/movie/${idTMDB}?api_key=${API_KEY}&language=pt-BR`;
    const urlCreditos = `https://api.themoviedb.org/3/movie/${idTMDB}/credits?api_key=${API_KEY}&language=pt-BR`;

    try {
        const resposta = await fetch(urlDetalhes);
        const filme = await resposta.json();

        // Preenche os campos
        document.getElementById("inputTitulo").value = filme.title || "";
        document.getElementById("inputAno").value = filme.release_date?.split("-")[0] || "";
        document.getElementById("inputClassificacao").value = filme.adult ? "18" : "Livre";
        document.getElementById("inputGenero").value = filme.genres?.map(g => g.name).join(", ") || "";
        document.getElementById("inputDuracao").value = filme.runtime || "";
        document.getElementById("inputNotaUsuario").value = filme.vote_average?.toFixed(1) || "";
        document.getElementById("inputSinopse").value = filme.overview || "";

        // Créditos (direção e elenco)
        const respostaCreditos = await fetch(urlCreditos);
        const creditos = await respostaCreditos.json();

        // Diretor (filtra pelo cargo "Director")
        const diretor = creditos.crew.find(p => p.job === "Director");
        document.getElementById("inputDirecao").value = diretor ? diretor.name : "";

        // Elenco (pega os primeiros 4 atores)
        const elenco = creditos.cast.slice(0, 4).map(a => a.name).join(", ");
        document.getElementById("inputElenco").value = elenco;

        // Poster
        if (filme.poster_path) {
            const posterUrl = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;
            const img = document.getElementById("previewImage");
            img.src = posterUrl;
            img.classList.remove("d-none");
            document.getElementById("addIcon").classList.add("d-none");

            // Tenta converter a imagem em Base64
            try {
                const respostaImg = await fetch(posterUrl);
                const blob = await respostaImg.blob();
                const reader = new FileReader();
                reader.onloadend = function () {
                    posterFilme = reader.result;
                };
                reader.readAsDataURL(blob);

                // Aguarda a leitura do base64 antes de continuar
                await new Promise(resolve => reader.onloadend = () => {
                    posterFilme = reader.result;
                    resolve();
                });
            } catch (erro) {
                console.warn("Erro ao converter imagem para base64. Salvando apenas o caminho:", erro);
                posterFilme = filme.poster_path;
            }
        }

        // Oculta os resultados da busca
        resultadoTMDB.innerHTML = "";

    } catch (erro) {
        console.error("Erro ao carregar detalhes do filme:", erro);
    }
}