const init = () => window.addEventListener('hashchange', renderPage);
const validateHash = (hash) => hash === "" ? 'inicio' : hash.replace('#', '');

const renderPage = async () => {
    const page = validateHash(window.location.hash);
    switch (page) {
        case ("inicio"): inicio(); break
        case ("descartar"): descartar(); break
        case ("doacao"): doacao(); break
        case ("horarios"): horarios(); break
        case ("login"): login(); break
        default: lost();
    }
    await goUp(100)
}

const nav = () => {
    const url = "pages/navbar/navbar.html",
        nav = document.getElementById("nav_index");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
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
            errorOnLoad()
        });
}

const errorOnLoad = () => {
    const body = document.getElementById("corpo_index");
    body.innerHTML = "<p>Página indisponível</p>"
}

const inicio = () => {
    window.location.hash = "#inicio";

    const url = "pages/inicio/inicio.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            errorOnLoad()
        });
}

const login = () => {
    const url = "pages/login/login.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            errorOnLoad()
        });
    }


const descartar = () => {
    const url = "pages/comoDescartar/comoDescartar.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            errorOnLoad()
        });
}

const horarios = () => {
    const url = "pages/horarios/horarios.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            errorOnLoad()
        });
}

const doacao = () => {
    const url = "pages/doacao/doacao.html",
        body = document.getElementById("corpo_index");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            errorOnLoad()
        });
}

const foot = () => {
    const url = "pages/footer/footer.html",
        footer = document.getElementById("footer_index");

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML = text)
}