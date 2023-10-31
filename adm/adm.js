const delay = async (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === "" ? 'horarios' : hash.replace('#', '');

const renderPage = async () => {
    const page = validateHash(window.location.hash);
    switch (page) {
        case ("doacoes"): doacao(); break
        case ("horarios"): horarios(); window.location.hash = "#horarios"; break;
        case ("usuarios"): user(); break
        default: /* lost(); */ horarios();
    }
    //await goUp(100)
}

const verif = () => {
    renderPage()
    init()
}

const paineladm = async () => {
    const url = "painelAdm/admPainel.html",
        body = document.getElementById("painel_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const user = () => {
    const url = "cadastroAdm/cadastroAdm.html",
        body = document.getElementById("content_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const horarios = async () => { 
    const url = "horariosAdm/horariosAdm.html",
        body = document.getElementById("content_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    await delay(200)
    if (tbIsRead) { await read(); tbIsRead = false }
    else { read(json); }
}

const doacao = () => {
    const url = "doacaoAdm/doacaoAdm.html",
        body = document.getElementById("content_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}