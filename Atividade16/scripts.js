function abrirCurso() {
  const select = document.getElementById("seletorCursos");
  const cursoSelecionado = select.value;

  if (cursoSelecionado === "") return;

  const cursos = {
    ads: {
      nome: "Análise e Desenvolvimento de Sistemas",
      url: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/analise-e-desenvolvimento-de-sistemas/"
    },
    fm: {
      nome: "Fabricação Mecânica",
      url: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/fabricacao-mecanica/"
    },
    logistica: {
      nome: "Logística",
      url: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/logistica/"
    },
    projetos: {
      nome: "Projetos Mecânicos",
      url: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/projetos-mecanicos/"
    },
    sistemasBiomedicos: {
      nome: "Sistemas Biomédicos",
      url: "https://fatecsorocaba.cps.sp.gov.br/cursos-fatec/sistemas-biomedicos/"
    }
  };

  const curso = cursos[cursoSelecionado];

  const confirmar = confirm(`Deseja visitar a página oficial da Fatec para o curso: ${curso.nome}?`);

  if (confirmar) {
    window.open(curso.url, "_blank", "width=600,height=300");
  }

  select.selectedIndex = 0;
}