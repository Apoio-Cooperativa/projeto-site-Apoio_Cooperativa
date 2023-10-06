const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === "" ? 'inicio' : hash.replace('#', '');

const renderPage = () => {
    const page = validateHash(window.location.hash);
    switch (page) {
        case ("inicio"): inicio(); break
        case ("reciclar"): reciclar(); break
        case ("doacao"): doacao(); break
        case ("horarios"): horarios(); break
        case ("adm"): adm(); break
        case ("login"): login(); break
        default: inicio() //lost();
    }
}

const nav = () => {
    const url = "pages/navbar/navbar.html",
        nav = document.getElementById("nav_index"),
        css = `<link rel="stylesheet" href="pages/navbar/navbar.css">`

    nav.innerHTML = css;

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
        .then(text => body.innerHTML += text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
    //goUp(400)
} */

const inicio = async () => {
    const url = "pages/inicio/inicio.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
    //goUp(400)
}

// const adm = () =>{} 

const reciclar = () => {
    const url = "pages/comoReciclar/comoReciclar.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    //goUp(400)
}

const horarios = () => {
    const url = "pages/horarios/horarios.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    //goUp(400)
}

const doacao = () => {
    const url = "pages/doacao/doacao.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    //goUp(400)
}

const foot = () => {
    const url = "pages/footer/footer.html",
        footer = document.getElementById("footer_index"),
        css = `<link rel="stylesheet" href="pages/footer/footer.css">`

    footer.innerHTML = css

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML += text)
}