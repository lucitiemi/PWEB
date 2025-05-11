function atualizarTexto() {
    const input = document.getElementById("meuTexto");
    const textoOriginal = input.value;
    const radios = document.getElementsByName("transformacao");

    radios.forEach(radio => {
        if (radio.checked) {
            if (radio.value === "maiuscula") {
                input.value = textoOriginal.toUpperCase();
            } else if (radio.value === "minuscula") {
                input.value = textoOriginal.toLowerCase();
            }
        }
    });
}