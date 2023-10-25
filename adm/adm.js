const delay = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === "" ? 'inicio' : hash.replace('#', '');

const renderPage = async () => {
    const page = validateHash(window.location.hash);
    switch (page) {
        case ("inicio"): inicio(); break
        case ("reciclar"): reciclar(); break
        case ("doacao"): doacao(); break
        case ("horarios"): horarios(); break
        // case ("adm"): adm(); break
        case ("login"): login(); break
        default: /* inicio() */ lost();
    }
    await goUp(100)
}



const paineladm = async () => {
    const url = "painelAdm/admPainel.html",
        body = document.getElementById("painel_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const horariosadm = async () => {
    const url = "../pages/horarios/horarios.html",
        body = document.getElementById("horarios_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    await delay(200)
    if (tbIsRead) { await read(); tbIsRead = false }
    else { read(json); }
}

const doacao = () => {
    const url = "../pages/horarios/horarios.html",
        body = document.getElementById("horarios_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}