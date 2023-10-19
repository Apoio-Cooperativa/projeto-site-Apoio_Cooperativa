const adm = async () => {
    const url = "painelAdm/admPainel.html",
        body = document.getElementById("corpo_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const doacao = async () => {
    const url = "pages/horarios/horarios.html..",
        body = document.getElementById("corpo_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}