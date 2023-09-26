let valor = sessionStorage.getItem("id");

const goUp = async () => {
    await delay(10);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

const nav = () => {
    const url = "navbar/navbar.html",
        nav = document.getElementById("nav_index"),
        css = `<link rel="stylesheet" href="navbar/navbar.css">`

    nav.innerHTML = css;

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML += text)
}

const verif = () => {
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
    const url = "inicio/inicio.html",
        body = document.getElementById("corpo_index"),
        css = `<link rel="stylesheet" href="inicio/inicio.css">`

    body.innerHTML = css

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
    sessionStorage.setItem("id", "inicio");
}

const reciclar = () => {
    const url = "comoReciclar/comoReciclar.html",
        body = document.getElementById("corpo_index"),
        css = `<link rel="stylesheet" href="comoReciclar/comoReciclar.css">`

    body.innerHTML = css

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    sessionStorage.setItem("id", "reciclar");
}

const horarios = () => {
    const url = "horarios/horarios.html",
        body = document.getElementById("corpo_index"),
        css = `<link rel="stylesheet" href="horarios/horarios.css">`

    body.innerHTML = css;

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    sessionStorage.setItem("id", "horarios")
}

const doacao = () => {
    const url = "doacao/doacao.html",
        body = document.getElementById("corpo_index"),
        css = `<link rel="stylesheet" href="doacao/doacao.css">`

    body.innerHTML = css

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML += text)
    sessionStorage.setItem("id", "doacao")
}

const foot = () => {
    const url = "footer/footer.html",
        footer = document.getElementById("footer_index"),
        css = `<link rel="stylesheet" href="footer/footer.css">`

    footer.innerHTML = css

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML += text)
}