let valor = sessionStorage.getItem("id");
const container = document.querySelector('#corpo_index')

const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === "" ? 'inicio' : hash.replace('#', '');

const renderPage = () => {
    const page = validateHash(window.location.hash);
    alert(page)
    container.innerHTML = '';
    delay(1000);
    switch (page) {
        case ("inicio"): inicio(); break
        case ("reciclar"): reciclar(); break
        case ("doacao"): doacao(); break
        case ("horarios"): horarios(); break
        //case ("adm"): adm(); break
        default: inicio()
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
    init()
    if (sessionStorage.getItem('reloaded')) {
        switch (valor) {
            case ("inicio"): inicio(); break
            case ("reciclar"): reciclar(); break
            case ("doacao"): doacao(); break
            case ("horarios"): horarios(); break
            //case ("adm"): adm(); break
            default: inicio()
        }
    } else inicio()
    sessionStorage.setItem('reloaded', 'true');
}

const inicio = () => {
    history.pushState(null, null, './#')
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
    sessionStorage.setItem("id", "inicio");
    goUp()
}

const reciclar = () => {
    history.pushState(null, null, './#reciclar')
    const url = "pages/comoReciclar/comoReciclar.html",
        body = document.getElementById("corpo_index"),
        css = `<link rel="stylesheet" href="pages/comoReciclar/comoReciclar.css">`

    body.innerHTML = css

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    sessionStorage.setItem("id", "reciclar");
    goUp()
}

const horarios = () => {
    const url = "pages/horarios/horarios.html",
        body = document.getElementById("corpo_index"),
        css = `<link rel="stylesheet" href="pages/horarios/horarios.css">`

    body.innerHTML = css;

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    sessionStorage.setItem("id", "horarios")
    goUp()
}

const doacao = () => {
    const url = "pages/doacao/doacao.html",
        body = document.getElementById("corpo_index"),
        css = `<link rel="stylesheet" href="pages/doacao/doacao.css">`

    body.innerHTML = css

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    sessionStorage.setItem("id", "doacao")
    goUp()
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