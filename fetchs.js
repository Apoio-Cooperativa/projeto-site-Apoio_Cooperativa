let valor = sessionStorage.getItem("id");

const nav = () => {
    const url = "navbar/navbar.html",
        nav = document.getElementById("nav");

    fetch(url)
        .then(res => res.text())
        .then(text => nav.innerHTML = text)
}

/* Esse cód é uma "gambiarra", tenho que mudar depois */
const verif = () => {
    if (sessionStorage.getItem('reloaded')) {
        switch (valor) {
            case ("inicio"): inicio(); break
            case ("reciclar"): reciclar(); break
            case ("doacao"): doacao(); break
            case ("horarios"): horarios(); break
            //case ("adm"): adm(); break
            default: alert("tenho que programar ainda!"); inicio()
        }
    } else inicio()
    sessionStorage.setItem('reloaded', 'true');
}

const inicio = () => {
    const url = "inicio/inicio.html",
        body = document.getElementById("corpo"),
        css = document.getElementById("atual");
    css.href = "inicio/inicio.css";

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)
        .catch(error => {
            body.innerHTML = "<p>Página indisponével</p>"
        });
    sessionStorage.setItem("id", "inicio");
}

const reciclar = () => {
    const url = "comoReciclar/comoReciclar.html",
        body = document.getElementById("corpo"),
        css = document.getElementById("atual")

    css.href = "comoReciclar/comoReciclar.css"

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "reciclar");
}

const horarios = () => {
    const url = "horarios/horarios.html",
        body = document.getElementById("corpo"),
        css = document.getElementById("atual");
    css.href = "horarios/horarios.css"

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "horarios");
}

const doacao = () => {
    const url = "doacao/doacao.html",
        body = document.getElementById("corpo"),
        css = document.getElementById("atual");
    css.href = "doacao/doacao.css"

    fetch(url)
        .then(res => res.text())
        .then(text => body.innerHTML = text)

    sessionStorage.setItem("id", "doacao");
}

const foot = () => {
    const url = "footer/footer.html",
        footer = document.getElementById("footer");

    fetch(url)
        .then(res => res.text())
        .then(text => footer.innerHTML = text)
}