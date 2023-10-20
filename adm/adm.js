const paineladm = async () => {
    const url = "painelAdm/admPainel.html",
        body = document.getElementById("painel_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const horariosadm = async () => {
    const url = "horariosAdm/horariosAdm.html",
        body = document.getElementById("horarios_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}