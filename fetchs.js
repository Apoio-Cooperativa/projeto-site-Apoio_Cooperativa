let valor = sessionStorage.getItem("id");

const nav = () => {
    const url = "navbar/navbar.html",
        nav = document.getElementById("nav");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
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
        body = document.getElementById("corpo"),
        css = document.getElementById("atual");
    

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
    sessionStorage.setItem("id", "inicio");
    css.href = "inicio/inicio.css";    
}

const reciclar = () => {
    const url = "comoReciclar/comoReciclar.html",
        body = document.getElementById("corpo"),
        css = document.getElementById("atual")

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "reciclar");

    css.href = "comoReciclar/comoReciclar.css"
}

const horarios = () => {
    const url = "horarios/horarios.html",
        body = document.getElementById("corpo"),
        css = document.getElementById("atual");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "horarios");
    css.href = "horarios/horarios.css"
}

const doacao = () => {
    const url = "doacao/doacao.html",
        body = document.getElementById("corpo"),
        css = document.getElementById("atual");

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "doacao");
    css.href = "doacao/doacao.css"
}

const foot = () => {
    const url = "footer/footer.html",
        footer = document.getElementById("footer");

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML = text)
}