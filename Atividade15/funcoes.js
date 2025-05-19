function validar() {
  const form = document.nomeform;
  const nome = form.elements['nome'].value.trim();
  const email = form.elements['email'].value.trim();
  const comentario = form.elements['comentario'].value.trim();
  const pesquisa = form.elements['pesquisa']; // grupo radio

  // Validação nome - no mínimo 10 caracteres
  if (nome.length < 10) {
    alert("O nome deve ter no mínimo 10 caracteres.");
    form.elements['nome'].focus();
    return false;
  }

  // Validação email
  if (email === "") {
    alert("Por favor, informe um e-mail válido.");
    form.elements['email'].focus();
    return false;
  }

  // Validação comentário - no mínimo 20 caracteres
  if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres.");
    form.elements['comentario'].focus();
    return false;
  }

  // Validação pesquisa (radio obrigatório)
  let selecionado = false;
  for (let i = 0; i < pesquisa.length; i++) {
    if (pesquisa[i].checked) {
      selecionado = true;
      if (pesquisa[i].value === "sim") {
        alert("Volte sempre à esta página!");
      } else {
        alert("Que bom que você voltou a visitar esta página!");
      }
      break;
    }
  }

  if (!selecionado) {
    alert("Por favor, responda à pesquisa.");
    return false;
  }

  return true;
}