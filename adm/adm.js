let isAdm = true;

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
        case ("horarios"): horarios(); break;
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

    uncheckBar();
}

const horarios = async () => {
    const url = "horariosAdm/horariosAdm.html",
        body = document.getElementById("content_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    await delay(350)
    if (tbIsRead) { await read(); tbIsRead = false }
    else { tables(json); }

    uncheckBar();
}

const doacao = () => {
    const url = "doacaoAdm/doacaoAdm.html",
        body = document.getElementById("content_adm");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    uncheckBar();
}

const uncheckBar = () => {
    try {
        const check = document.getElementById("toogle");
        check.checked = false;
    }
    catch { }
}

const voltar = async () => {
    await delay(100)
    window.location.hash = "#horarios";
}