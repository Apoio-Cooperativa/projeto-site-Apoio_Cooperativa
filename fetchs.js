const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === "" ? 'inicio' : hash.replace('#', '');

const renderPage = async () => {
    const page = validateHash(window.location.hash);
    switch (page) {
        case ("inicio"): inicio(); break
        case ("reciclar"): await reciclar(); await cardIsSet(); break
        case ("doacao"): doacao(); break
        case ("horarios"): horarios(); break
        case ("adm"): adm(); break
        case ("login"): login(); break
        default: inicio() //lost();
    }
    await goUp(50)
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

/* const lost = () => {
    const url = "pages/inicio/inicio.html",
        body = document.getElementById("corpo_index"),
        css = `<link rel="stylesheet" href="pages/inicio/inicio.css">`

    body.innerHTML = css

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
    
} */

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

const horarios = () => {
    const url = "pages/horarios/horarios.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
}

const doacao = () => {
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