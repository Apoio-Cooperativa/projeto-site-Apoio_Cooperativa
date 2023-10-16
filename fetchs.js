const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === "" ? 'inicio' : hash.replace('#', '');

const renderPage = async () => {
    const page = validateHash(window.location.hash);
    switch (page) {
        case ("inicio"): await inicio(); break
        case ("reciclar"): await reciclar(); break
        case ("doacao"): await doacao(); break
        case ("horarios"): await horarios(); break
        // case ("adm"): await adm(); break
        case ("login"): await login(); break
        default: /* inicio() */ lost();
    }
    await goUp()
}

const nav = () => {
    const url = "pages/navbar/navbar.html",
        nav = document.getElementById("nav_index");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML += text)
}

const verif = () => {
    renderPage()
    init()
}

const lost = () => {
    const url = "pages/lost/lost.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
}

// const login = () =>{}

const inicio = async () => {
    window.location.hash = "#inicio";

    const url = "pages/inicio/inicio.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
}

// const adm = () =>{} 

const reciclar = async () => {
    const url = "pages/comoReciclar/comoReciclar.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const horarios = async () => {
    const url = "pages/horarios/horarios.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    // await goUp()
}

const doacao = async () => {
    const url = "pages/doacao/doacao.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const foot = () => {
    const url = "pages/footer/footer.html",
        footer = document.getElementById("footer_index");

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML += text)
}